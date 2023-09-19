from tetris import TetrisApp
if __name__ == '__main__':
    INVALID_MOVE_REWARD = -999
    GAME_OVER_REWARD = -999
    VALID_MOVE_REWARD = 1
    LINE_HEIGHT_PENALTY = 10
    ROTATION_PENALTY = 20
    
    REWARDS = (INVALID_MOVE_REWARD, GAME_OVER_REWARD, VALID_MOVE_REWARD, LINE_HEIGHT_PENALTY, ROTATION_PENALTY)
    print("Starting game...")
    App = TetrisApp(ai=True, rewards=REWARDS)

    import random 
    print(App.getState())
    for i in range(10):
        print(App.doAction(random.randint(0,5))[0])