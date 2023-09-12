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
    np.array([
        [1, 1, 1],
        [0, 1, 0]]
    ),
    
    np.array([
        [0, 2, 2],
        [2, 2, 0]
    ]),
    
    np.array([
        [3, 3, 0],
        [0, 3, 3]
    ]),
    
    np.array([
        [4, 0, 0],
        [4, 4, 4]
     ]),
    
    np.array([
        [0, 0, 5],
        [5, 5, 5]
    ]),
    
    np.array([
        [6, 6, 6, 6]
    ]),
    
    np.array([
        [7, 7],
        [7, 7]
     ])
]

def rotate_clockwise(shape):
    return np.rot90(shape, k=-1)

def check_collision(board, shape, offset):
    off_x, off_y = offset
    for iy, ix in np.ndindex(shape.shape):
        cell = shape[iy, ix]
        try:
            if cell and board[ iy + off_y ][ ix + off_x ]:
                return True
        except IndexError:
            return True
    return False

def remove_row(board, row):
    out = np.delete(board, row, 0)
    out = np.vstack((np.zeros((1,cols), dtype=int), out))
    return out
    
def join_matrices(mat1, mat2, mat2_off):
    out = np.copy(mat1)
    off_x, off_y = mat2_off
    for cy, row in enumerate(mat2):
        for cx, val in enumerate(row):
            out[cy+off_y-1 ][cx+off_x] += val
    return out
    
def padToShape(arr, shape):
    assert(type(shape) is tuple)
    assert(arr.ndim == len(shape))
    assert(np.multiply.reduce(shape) >= np.multiply.reduce(arr.shape))
    result = np.zeros(shape)
    return join_matrices(result, arr, (0,0))

def new_board():
    board = np.zeros((rows, cols), dtype=int)
    board = np.vstack((board, np.ones((1,cols), dtype=int)))
    return board

class TetrisApp(object):
    COLLISION_MOVES = ['LEFT', 'RIGHT', 'ROTATE_LEFT', 'ROTATE_RIGHT']

    def __init__(self, ai=False, rewards=None):
        self.next_stone_idx = rand(len(tetris_shapes))
        self.next_stone = tetris_shapes[self.next_stone_idx]
        
        if ai:
            if not rewards: 
                raise ValueError("Required parameter: rewards")
            self.initRL(rewards)
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
    
    def new_stone(self):
        self.stone = self.next_stone[:]
        self.next_stone_idx = rand(len(tetris_shapes))
        self.next_stone = tetris_shapes[self.next_stone_idx]
        self.stone_x = int(cols / 2 - len(self.stone[0])/2)
        self.stone_y = 0
        
        if check_collision(self.board,
                           self.stone,
                           (self.stone_x, self.stone_y)):
            self.gameover = True
    
    def initHuman(self):
        self.board = new_board()
        self.new_stone()
        self.level = 1
        self.score = 0
        self.lines = 0
        pygame.time.set_timer(pygame.USEREVENT+1, 1000)
    
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
                            (new_x, self.stone_y))
            if not collided:
                self.stone_x = new_x
                return True
        return False

    def quit(self):
        self.center_msg("Exiting...")
        pygame.display.update()
        sys.exit()
    
    def drop(self, manual):
        scoreChange = 0
        if not self.gameover and not self.paused:
            scoreChange = 1 if manual else 0
            self.score += 1 if manual else 0
            self.stone_y += 1
            if check_collision(self.board,
                               self.stone,
                               (self.stone_x, self.stone_y)):
                self.board = join_matrices(
                  self.board,
                  self.stone,
                  (self.stone_x, self.stone_y))
                self.new_stone()
                cleared_rows = 0
                while True:
                    for i in range(len(self.board)-1):
                        row = self.board[i]
                        if 0 not in row:
                            self.board = remove_row(
                              self.board, i)
                            cleared_rows += 1
                            break
                    else:
                        break
                scoreChange += self.add_cl_lines(cleared_rows)
                return (True, scoreChange)
        return (False, scoreChange)
    
    def insta_drop(self):
        scoreChange = 0
        if not self.gameover and not self.paused:
            dropped = self.drop(True)
            while(not dropped[0]):
                scoreChange += dropped[1]
                dropped = self.drop(True)
                pass
            scoreChange += dropped[1]
        return scoreChange
    
    def rotate_stone(self, direction = 1):
        if not self.gameover and not self.paused:
            new_stone = np.rot90(self.stone, k=direction*-1)
            if not check_collision(self.board,
                                   new_stone,
                                   (self.stone_x, self.stone_y)):
                self.stone = new_stone
                return True
        return False
    
    def toggle_pause(self):
        self.paused = not self.paused
    
    def start_game(self):
        if self.gameover:
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
                self.center_msg("""Game Over!
Press space to continue""")
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
    
    def initRL(self, rewards):
        '''X: [board, next, curr, pos] | A: [LEFT, RIGHT, DOWN, UP, SPACE] | S: [score]'''
        self.invalidMoveReward, self.gameOverReward, self.validMoveReward = rewards
        
        self.next_stone_idx = rand(len(tetris_shapes))
        self.next_stone = tetris_shapes[self.next_stone_idx]
       
        self.gameover = False
        self.paused = False
        
        self.board = new_board()
        self.new_stone()
        self.level = 1
        self.score = 0
        self.lines = 0
        if self.gameover:
                print("game over")

    def getState(self):
        currView = join_matrices(self.board, self.stone, (self.stone_x, self.stone_y))
        
        return {
            "board": currView,
            "next_piece": padToShape(self.next_stone, (2,4)), #2x2, 2x3, 1x4
            "current_piece": padToShape(self.stone, (2,4)),
            "position": np.array((self.stone_x, self.stone_y))
        }
    
    def getReward(self, actionStr, result):        
        if actionStr in self.COLLISION_MOVES:
            return self.validMoveReward if result else self.invalidMoveReward
        elif actionStr == 'DOWN':
            return result[1]
        elif actionStr == 'HARD_DROP':
            return result
        else:
            raise ValueError("Unknown move")
    
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
        
        #Return reward for action
        result = ACTION_FN[actionStr]()
        if self.gameover:
            reward = self.gameOverReward
        else:
            reward = self.getReward(actionStr, result)
         
        return (self.getState(), reward, self.gameover)


#if __name__ == '__main__':
#    INVALID_MOVE_REWARD = -999
#    GAME_OVER_REWARD = -999
#    VALID_MOVE_REWARD = 1
#    REWARDS = (INVALID_MOVE_REWARD, GAME_OVER_REWARD, VALID_MOVE_REWARD)
#    App = TetrisApp(ai=True, rewards=REWARDS)
#    App.getState()
#    print(App.doAction(5))
#    print(App.doAction(5))
