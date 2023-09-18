#!/usr/bin/env python
# Very simple tetris implementation
# 
# Control keys:
#       Down - Drop stone faster
# Left/Right - Move stone
#         Up - Rotate Stone clockwise
#     Escape - Quit game
#          P - Pause game
#     Return - Instant drop
#
# Have fun!

# Copyright (c) 2010 "Kevin Chabowski"<kevin@kch42.de>
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

from random import randrange as rand
import tensorflow as tf
import tensorflow.experimental.numpy as tnp
import sys
import numpy as np

# The configuration
cell_size = 20
cols =      10
rows =      20
maxfps =    30

colors = [
(0,   0,   0  ),
(220, 0,   20  ),
(60,  165, 50 ),
(100, 100, 255),
(255, 90,  0  ),
(255, 200, 40  ),
(160, 50,  210),
(70,  230, 210),
(35,  35,  35) # Helper color for background grid
]

# Define the shapes of the single parts
tetris_shapes = [
    tf.constant([
        [1, 1, 1],
        [0, 1, 0]]
    ),
    tf.constant([
        [0, 2, 2],
        [2, 2, 0]
    ]),
    tf.constant([
        [3, 3, 0],
        [0, 3, 3]
    ]),
    tf.constant([
        [4, 0, 0],
        [4, 4, 4]
     ]),
    tf.constant([
        [0, 0, 5],
        [5, 5, 5]
    ]),
    tf.constant([
        [6, 6, 6, 6]
    ]),
    tf.constant([
        [7, 7],
        [7, 7]
     ])
]

COLLISION_MOVES = ['LEFT', 'RIGHT', 'ROTATE_LEFT', 'ROTATE_RIGHT'] #These moves give penalties if used in invalid ways

'''
def check_collision(board, piece, offset):
    off_x, off_y = offset
    for i, j in np.ndindex(*piece.shape):
        cell = piece[i, j]
        try:
            if cell and board[ i + off_y ][ j + off_x ]:
                return True
        except IndexError:
            return True
    return False
'''

@tf.function
def check_collision(board, piece, offset):
    if piece.shape[0] + offset[0] >= board.shape[0]: return True
    if piece.shape[1] + offset[1] >= board.shape[1]: return True

    padded_piece = padToShape(piece, board.shape, offset)
    collided_tiles = tf.math.multiply(board, padded_piece)
    collision = tf.math.reduce_sum(collided_tiles)
    return collision > 0

@tf.function
def remove_rows(board, row_mask):
    removed_count = board.shape[0] - tf.math.reduce_sum(row_mask)
    out = tf.range(row_mask.shape[0])
    out = tf.boolean_mask(out, row_mask)
    out = tf.gather(board, out)
    new_rows = tf.zeros((removed_count, board.shape[1]), dtype=tf.int32)
    out = tf.concat((new_rows, out), axis=0)
    return out

# def join_matrices(mat1, mat2, mat2_off):
#     out = np.copy(mat1)
#     off_x, off_y = mat2_off
#     out[off_y: off_y + mat2.shape[0], off_x: off_x + mat2.shape[1]] += mat2
#     return out

@tf.function
def join_matrices(mat1, mat2, mat2_off):
    mask = padToShape(mat2, mat1.shape, mat2_off)
    return tf.math.add(mat1, mask)

# def padToShape(arr, shape):
#     result = tf.zeros(shape, dtype=tf.int32)
#     result[:arr.shape[0], :arr.shape[1]] = arr
#     return result

#Pads array {arr} to be of size {shape}, with the orignal array anchored at {offset = (row, col)}
@tf.function
def padToShape(arr, shape, offset=(0,0)):
    p_top = offset[0]
    p_bottom = shape[0] - arr.shape[0] - p_top
    p_left = offset[1]
    p_right = shape[1] - arr.shape[1] - p_left
    paddings = tf.constant([[p_top, p_bottom,], [p_left, p_right]])
    padded = tf.pad(arr, paddings)
    return padded

@tf.function
def rotate_tensor(tensor, direction=1):
    out = tf.expand_dims(tensor, -1)
    out = tf.image.rot90(out, k=direction*-1)
    out = tf.squeeze(out, axis=-1)
    return out

class TetrisApp(object):
    def __init__(self, ai=False, rewards=None):
        self.ai = ai
        self.rewards = rewards
        self.next_stone_idx = rand(len(tetris_shapes))
        self.next_stone = tetris_shapes[self.next_stone_idx]
        self.col_heights = tf.zeros(cols, dtype=np.int32)
        
        if ai:
            if not rewards: 
                raise ValueError("Required parameter: rewards")
            self.invalidMoveReward, self.gameOverReward, self.validMoveReward, self.lineHeightPenalty = rewards
            self.initRL()
        else:
            self.initPygame()
            self.initHuman()
    
    def initPygame(self):
        import pygame
        pygame.init()
        pygame.key.set_repeat(250,25)
        self.width = cell_size*(cols+6)
        self.height = cell_size*rows
        self.rlim = cell_size*cols
        self.bground_grid = np.indices((rows, cols)).sum(axis=0) % 2
        self.bground_grid *= 8
        
        self.default_font =  pygame.font.Font(
            pygame.font.get_default_font(), 12)
        
        self.screen = pygame.display.set_mode((self.width, self.height))
        pygame.event.set_blocked(pygame.MOUSEMOTION) # We do not need
                                                     # mouse movement
                                                     # events, so we
                                                     # block them.
    
    @tf.function
    def new_board(self):
        board = tf.zeros((rows, cols), dtype=tf.int32)
        board = tf.concat((board, tf.ones((1,cols), dtype=tf.int32)),  axis=0)
        return board

    def new_stone(self):
        self.stone = tf.identity(self.next_stone)
        self.next_stone_idx = rand(len(tetris_shapes))
        self.next_stone = tetris_shapes[self.next_stone_idx]
        self.stone_x = int(cols / 2 - len(self.stone[0])/2)
        self.stone_y = 0
        
        if check_collision(self.board,
                           self.stone,
                           (self.stone_y, self.stone_x)):
            self.gameover = True
    
    def initHuman(self):
        self.board = self.new_board()
        self.new_stone()
        self.level = 1
        self.score = 0
        self.lines = 0
        self.line_height = 0
        pygame.time.set_timer(pygame.USEREVENT+1, 1000)
    
    def initRL(self):
        '''X: [board, next, curr, pos] | A: [LEFT, RIGHT, DOWN, UP, SPACE] | S: [score]'''
        
        self.next_stone_idx = rand(len(tetris_shapes))
        self.next_stone = tetris_shapes[self.next_stone_idx]
        
        self.board = self.new_board()
        self.new_stone()
        self.level = 1
        self.score = 0
        self.lines = 0
        self.line_height = 0
        self.gameover = False
        self.paused = False
    
    def disp_msg(self, msg, topleft):
        x,y = topleft
        for line in msg.splitlines():
            self.screen.blit(
                self.default_font.render(
                    line,
                    False,
                    (255,255,255),
                    (0,0,0)),
                (x,y))
            y+=14
    
    def center_msg(self, msg):
        for i, line in enumerate(msg.splitlines()):
            msg_image =  self.default_font.render(line, False,
                (255,255,255), (0,0,0))
        
            msgim_center_x, msgim_center_y = msg_image.get_size()
            msgim_center_x //= 2
            msgim_center_y //= 2
        
            self.screen.blit(msg_image, (
              self.width // 2-msgim_center_x,
              self.height // 2-msgim_center_y+i*22))
    
    def draw_matrix(self, matrix, offset):
        off_x, off_y  = offset
        for iy, ix in np.ndindex(matrix.shape):
            val = matrix[iy, ix]
            if val:
                pygame.draw.rect(
                            self.screen,
                            colors[val],
                            pygame.Rect(
                                (off_x+ix) * cell_size,
                                (off_y+iy) * cell_size, 
                                cell_size,
                                cell_size),0)
    
    def add_cl_lines(self, n): #Returns score gained
        linescores = [0, 40, 100, 300, 1200]
        self.lines += n
        self.score += linescores[n] * self.level
        if self.lines >= self.level*6:
            self.level += 1
            newdelay = 1000-50*(self.level-1)
            newdelay = 100 if newdelay < 100 else newdelay
            pygame.time.set_timer(pygame.USEREVENT+1, newdelay)
        return linescores[n] * self.level
    
    def move(self, delta_x):
        if not self.gameover and not self.paused:
            new_x = self.stone_x + delta_x
            if new_x < 0:
                return False
                new_x = 0
            if new_x > cols - len(self.stone[0]):
                return False
                new_x = cols - len(self.stone[0])
            collided = check_collision(
                            self.board,
                            self.stone,
                            (self.stone_y, new_x))
            if not collided:
                self.stone_x = new_x
                return True
        return False

    def quit(self):
        self.center_msg("Exiting...")
        pygame.display.update()
        sys.exit()

    #Clears all full rows and returns the score gained
    def clear_rows(self):
        cleared_rows = 0
        row_clear_mask = tf.Variable(tf.ones(21,), trainable=False)
        for i in range(self.board.shape[0]-1):
            row = self.board[i]
            if tf.math.count_nonzero(row) == row.shape[0]:
                row_clear_mask[i].assign(0)
                cleared_rows += 1
                self.line_height -= 1
        
        self.board = remove_rows(self.board, row_clear_mask)
        return self.add_cl_lines(cleared_rows)

    def drop(self, manual):
        scoreChange = 0
        if not self.gameover and not self.paused:
            scoreChange = 1 if manual else 0
            self.score += 1 if manual else 0
            prev_y = self.stone_y
            self.stone_y += 1
            if check_collision(self.board,
                               self.stone,
                               (self.stone_y, self.stone_x)):
                self.board = join_matrices(
                  self.board,
                  self.stone,
                  (prev_y, self.stone_x))
                self.line_height = max(self.line_height, rows - (prev_y))
                scoreChange += self.clear_rows()
                self.new_stone()
                return (True, scoreChange)
        return (False, scoreChange)
    
    #pos = (y, x)
    # Returns the distance from the bottom of the piece to the rest of the stack
    def distance_to_stack(self, piece, pos):
        minDist = rows
        for i, j in np.ndindex(*piece.shape):
            if piece[i, j] != 0:
                glob_i, glob_j = i + pos[0], j + pos[1]
                minDist = min(minDist, rows - self.col_heights[glob_j] - glob_i)
        return minDist 

    def insta_drop(self):
        scoreChange = 0
        if not self.gameover and not self.paused:
            dropped = self.drop(True)
            while(not dropped[0]):
                scoreChange += dropped[1]
                dropped = self.drop(True)
            scoreChange += dropped[1]
        return scoreChange

    def rotate_stone(self, direction = 1):
        if not self.gameover and not self.paused:
            new_stone = rotate_tensor(self.stone, direction)
            if not check_collision(self.board,
                                   new_stone,
                                   (self.stone_y, self.stone_x)):
                self.stone = new_stone
                return True
        return False
    
    def toggle_pause(self):
        self.paused = not self.paused
    
    def start_game(self):
        if self.gameover:
            if self.ai:
                self.initRL()
            else:
                self.initHuman()
            self.gameover = False
    
    def run(self):
        key_actions = {
            'ESCAPE':   self.quit,
            'LEFT':     lambda:self.move(-1),
            'RIGHT':    lambda:self.move(+1),
            'DOWN':     lambda:self.drop(True),
            'UP':       self.rotate_stone,
            'p':        self.toggle_pause,
            'SPACE':    self.start_game,
            'RETURN':   self.insta_drop
        }
        
        self.gameover = False
        self.paused = False
        
        dont_burn_my_cpu = pygame.time.Clock()
        while 1:
            self.screen.fill((0,0,0))
            if self.gameover:
                self.center_msg("""Game Over! Press space to continue""")
            else:
                if self.paused:
                    self.center_msg("Paused")
                else:
                    pygame.draw.line(self.screen,
                        (255,255,255),
                        (self.rlim+1, 0),
                        (self.rlim+1, self.height-1))
                    self.disp_msg("Next:", (
                        self.rlim+cell_size,
                        2))
                    self.disp_msg("Score: %d\n\nLevel: %d\
\nLines: %d" % (self.score, self.level, self.lines),
                        (self.rlim+cell_size, cell_size*5))
                    self.draw_matrix(self.bground_grid, (0,0))
                    self.draw_matrix(self.board, (0,0))
                    self.draw_matrix(self.stone,
                        (self.stone_x, self.stone_y))
                    self.draw_matrix(self.next_stone,
                        (cols+1,2))
            pygame.display.update()
            
            for event in pygame.event.get():
                if event.type == pygame.USEREVENT+1:
                    self.drop(False)
                elif event.type == pygame.QUIT:
                    self.quit()
                elif event.type == pygame.KEYDOWN:
                    for key in key_actions:
                        if event.key == eval("pygame.K_"
                        +key):
                            key_actions[key]()
                    
            dont_burn_my_cpu.tick(maxfps)

    def getState(self):
        output = tf.TensorArray(dtype=tf.int32, size=0, dynamic_size=True, infer_shape=False)

        board = join_matrices(self.board, self.stone, (self.stone_y, self.stone_x))
        next_piece = padToShape(self.next_stone, (4,4)) #2x2, 2x3, 1x4
        current_piece = padToShape(self.stone, (4,4)) #2x2, 2x3, 1x4 padded to 4x4
        position = tf.constant((self.stone_x, self.stone_y), dtype=tf.int32, shape=(1, 2)) #1x2 #2x1
        line_height = tf.constant(self.line_height, dtype=tf.int32, shape=(1, 1))

        output = output.write(0, board)
        output = output.write(1, next_piece)
        output = output.write(2, current_piece)
        output = output.write(3, position)
        output = output.write(4, line_height)
        output.mark_used()

        return(output)#[board, next_piece, current_piece, position, line_height])
    
    def getReward(self, actionStr, result, delta_line_height):
        reward = 0        

        if actionStr in COLLISION_MOVES:
            reward = self.validMoveReward if result else self.invalidMoveReward
        elif actionStr == 'DOWN':
            reward = result[1]
        elif actionStr == 'HARD_DROP':
            reward = result
        else:
            raise ValueError("Unknown move")

        reward -= self.lineHeightPenalty * delta_line_height
        return reward
    
    def doAction(self, action):
        ACTIONS = {0: 'LEFT', 1:'RIGHT', 2:'DOWN', 3:'ROTATE_LEFT', 4:'ROTATE_RIGHT', 5:'HARD_DROP'}
        actionStr = ACTIONS[action]
        ACTION_FN = {
            'LEFT':     lambda: self.move(-1),
            'RIGHT':    lambda: self.move(+1),
            'DOWN':     lambda: self.drop(True),
            'ROTATE_LEFT': self.rotate_stone,
            'ROTATE_RIGHT': lambda: self.rotate_stone(-1),
            'HARD_DROP':   self.insta_drop
        }
        
        prev_line_height = self.line_height
        #Perform action
        result = ACTION_FN[actionStr]()

        #Return reward for action
        if self.gameover:
            reward = self.gameOverReward
        else:
            reward = self.getReward(actionStr, result, self.line_height - prev_line_height)
         
        return (self.getState(), reward, self.gameover)

# def printState(state):
#     for i in range(state.size()):
#         print(state.read(i))

# if __name__ == '__main__':
#     INVALID_MOVE_REWARD = -999
#     GAME_OVER_REWARD = -999
#     VALID_MOVE_REWARD = 1
#     LINE_HEIGHT_PENALTY = 10
#     REWARDS = (INVALID_MOVE_REWARD, GAME_OVER_REWARD, VALID_MOVE_REWARD, LINE_HEIGHT_PENALTY)
#     print("Starting game...")
#     App = TetrisApp(ai=True, rewards=REWARDS)

#     import random 
#     readState(App.getState())
#     for i in range(10):
#         readState(App.doAction(random.randint(0,5))[0])