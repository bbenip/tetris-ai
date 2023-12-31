import os
import time
import json
import random

from requests import get

from seleniumwire import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import *

REPLAYER_URL = "https://s.jezevec10.com/js/replayer.js"
MODIFIED_REPLAYER_FILE_PATH = "./payload/replayer.js"
REPLAY_PAGE_URL = "https://jstris.jezevec10.com/replay"

ABSOLUTE_PATH = os.path.dirname(os.path.abspath(__file__))
DOWNLOAD_FOLDER_PATH = os.path.join(ABSOLUTE_PATH, "Downloads")
GAMES_FOLDER_PATH = os.path.join(ABSOLUTE_PATH, 'input_games')

GAMES_JSON_FILENAME = 'replayStrings.json'
DEFAULT_REPLAY_FILENAME = 'replay.json'
NUMBERED_REPLAY_FORMAT = '%s.json'

USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36'
REPLAY_TEXT = 'N4IgxiBcoG5QzAGhAZwPYDMAuARATmgA4CSAJlACzIDmAhgLYCmAylrXllAIwCsATAE4BAdgEVhwgAzweNBowCiAO3KRegkWIHwhk5CkaNVIAF4CT9UmhDJ63ZACMUUPakYvkpWs8gA2YQC+nlAgAEIUYADyPAAeAGIAinGMxABaAGoxhDEAEgDSmAkAngoAgsQA1GAANmAAltRxADIA1mAA7tQAKjmSkZEKvjwmFAAWCXgAcnEoCgAaAKoASvCkALKlCpItCwoAUgDqk1wAju1zAJqkGCgHCV2pfEuEoXxoSw5Kk+0oOcxzpDwcXghDmeDmGAWAGEoQk0Ok5qMABzMSZYCjwJYAKwEB2YFB4Fzm9FozFoaD2vhyaDwAHF6DxfNVSiclMwAK6lPB7OZYDDMYRcUSlGBcLo4CgoVJLIqYSJYUhNOZcBY4dKpSb0IrwOIYUhgFJdHjMLrVGJVBK+eBNLAKDA8gTEHJSDDwHKlOabJbtRihKECNaRUqlCrwO0KO4xegLWlcMCkFBQprMPYOMBKY0YUZNSQKGLpExdFqTQgKHhYEySagJah7faSDAKZh5UJrUaSPijLq+dLMNBxuYHBZxUjpLgVUKpWmTapI2kYHK0FpLLDEA4VBZgBakExgObULGMDChYRYeCSBtKPI4OIUBKjUYmA7ESQUPg5FqhZjMUqp+D0OIoVSUY9iKOo0EmZg6lGXwlByPAFChGIWjwBF2R4RgAHokTABITBieAcDyJYkSKUITDQOYEhQARIngLgFwcYgBD4Fp4CxDA6gNRh4F8NYcnRTDSjiJFSgABRMSZMNoahQyaAR2gSHAlFKEpiAUdoTkkHBaTAMTqiWMScjiH9Unads3QwYhRmoMkr2DFAD2IeBIjmMAkRQLo+C4JZQjiYzJDqUoukmPYxJaXt4AOPUwDXKEuguPh0noapWNKWgliWdliCUUJJDAUZSEkNY5nSZJfDiARqgoBQWlGHAoRyPYxlCLEDkiBIeD2Wk5mqJohylNAchU2lSDiWgFAovhGCxNA8lGIo8FIRh0QcJosSwHIoS4PrRjmdkkShCc1lpeAYkmOY9lCJFOUkUomlNARjz4PlSFKRgchwHhSC6JRRgqdoFmEerJFIMTqHgCpqhyJFrmELFSiwMAFGIUoFpwHAohQUI8hyBRhAUC48zQahqRrUC9hAwg1iBKF4DmNYEgULg1hMOo+k3Cou18cYjAUJEFl65hqEmJo4kkXxqAWPhDiwLgSbmGA9noR5AbAGBSB4JZepsvJaRwGIKAuQKGrWZqeHaFoYDyA5Rh4WhRnoLhIlHPYxTQBJGBaNZaAOFpWUYFBqloIoYhQZbJAWJp6ChGBovCNYDngIoFzyHgwB4LoOzmLoUEmdIlD4NYmlIcdSnCMS5m9qpeLmHJ2TQCphHaJEHAwSSxLE5gKkILphD2do6NCGAhqRCYuBwSI1kymJmBOWk1gUBxJihUolj2KEwAAXhAAIgA'
REPLAY_TEXT_2 = "N4IgxiBcoG5QzAOngGhAZwPYDMAuARAJ0wAcBJAEwTQHMBDAWwFMBlXOw3KARgDYBOAEwAGAOwBWeON4AWbgA5ajJgFEAdlUh8hY8XOHDeotOiZNNIEnXQBLAB4ArEGgZRBaAEboowk0zdoFNY88KggHIQ8viCRkMIAvoFQIACCKTQpAMIAivjiKdgA1vg52QBSAEIshQDiANIAStwyZQxgopgqAOoArmTcYA2iMgCOFZmYYCMkAJ6EZXU96ISZM+i4dQboANQA7vLC8gAKKTMAmg5HLAByZyoAagA2ACpd8NcUYNzbz2ce1w50IIABrPbCiGoMZ78Gh2QQAMSOdAAqvw7AAveAkI40QrbOrogD0AAsUo8HA58DZsrwSCoYDceoUHPxstkKmV5CpdmVkfIKjQWDV8AAtM4UR42XhdbIikVHR4MTLA+GYYnIpj3eRlQrcNTCcTlGaCTIAGTOJFw6IYMhYHkeJCZDFEXTANDIghI2HQ2SO-X4IvEomBmPRNCOhQq+BmKjsZHuAFliWAZjV7mQPGAHI9sl0mLwyDZ0HYWKIVAmKmQ7AB5BzVo4qXjodEzdFHXDXFIHU3oi3Chy8CmEeQ9UQwbDIs78MBqQSCbDYEjbatqcTbbCEcQVR70e4zEY0bIOYmZXjIo7iBrZR41TLIsAkFiZR4sGw1YkabYVbbiM7wnrZM8bpSPC2ToGodDCPCzz3CqWrcDQrwONcYAJtw4hATeTDovwZR2MIuBHHy07PIIDRHB4CaEtguw1NsMgyCk+DbCMLD8LsDAktkAASmQwPC1ZnDQ4gjM8IziNWoiFPIgjPPAIrPO+FDwoIMDJiQ9zcEQ6DccCYBMDAwimmQIwqOghTCHYDRgtc2RfAmMH4NcXQJvAPQNI8dTbISdS4XUKSkvgCY0PcLAVPAZBlG6PQsGUMAVAm+CPLwdRgDYdSfGU-AsJgwJ1A4UxdCwMCEvgmCmjAYAVHUhJmcIMyiOiCYNAmTXCPAdhgLw2zZGcdBlKamDiOiLDWmoMDVmAMjiOIaiYCMTAMCQvCEGo6AMCkuU1HcDjceQVzEtwdTIrwxKEI0ogkAm2XLY86LcAmhAjLs1jPHU8CCKIC7AioTDuZ8-D1MSMjoD0djEhQDiltxZSCDY-C8LsZ2EMCZCUM8wIyMG4gitkdBRvchTZMSdgePC3FnCkNr4HU3HVjYKjbMS9y2cCNQyDA8C-Ck1bZHUvC4HC2AOD0hJkEc8CFLwIwUBUIoyA0hDwjUoh1B4djZHYNjYEcYDVu9tWENsrKPPCoopHQ9xwiMZAVCoJBqBpVw9D0mB1LivC8O6KOrIULqYGD+ApDUCb3KIMwig42Q0DCZBnLgFQMLsPRMNxnbVh4prPLg8gTV5yLMWAZANKaJMpKahK7CK+A0MIRyZCuZRkLadgcWoNisIQIojD0wJZwHPSZISwgJl0MgzGozzXOg-CVtwHgOHQy4pM8MjwBUmDcei1nOsOuTol0MBdGoTB2Ew-AjPw2zyOC6KYJkKQVHyp4yGmuxMGALB0Gn8AqPIIrIkyNsTA1YKDZFwLwQodARiPEyCMDw-BgQkAoJeW0uwbAumuDAQoFA1BkEJKwGo8g1DYCYOIBgOldidT7qaBgZxsAJmENsEUMwvgig0IUD+8AL4pG4uxOwvAVAsGRGTFgZAaAJjsvABMyIahVHEPCWEghrh1BFKIeEhBHhnEqDYfATBrg9DpB5boyDRDcWJD0IwTBgSCH4DAXA2xrjAmNrsSSMd4AwzAGAbYvBHjEl2I8I41xCD8BsNwQQ39iQjG2DAeQdjxD8l2Ko3YhAejMRsM8Hov5rjwnxJBb82j-wMDUCwYGxk6joEJKTKkMhuI1BGJ1QkntDqCG4qk4EwIaA9BgFlGgZwGAqDAGUFQ3FTYjBVCKOwNASDiEyHYQopo1DcXQdxZ4NBri7HgDICghBCgyBXGHdAkhGqbLULsCuXYfjiH4FvbYYBsjwnhN+QRFBhBlEJJgLo3Fsjv2JJgQGhQwApAALwgHiEAA"
REPLAY_ID = random.randint(1000, 9999)

LOAD_BUTTON_ID = 'load'
PAUSE_BUTTON_ID = 'pause'
REPLAY_TEXT_ID = 'rep0'
DOWNLOAD_BTN_ID = 'fullDL'

MAX_FAILURES = 5 # Maximum number of times we repeat a request
FAILURE_TIMEOUT = 30 # Time (in seconds) to wait after a failed request

# Load games from JSON file
def loadGames(filepath):
    out = []
    with open(filepath, 'rb') as f:
        data = json.load(f)
        for game in data:
            out.append(game)
    return out

# Intercepts outgoing requests
def interceptor(request):
    if REPLAYER_URL in request.url:
        print("requested replayer", request.url)
        with open(MODIFIED_REPLAYER_FILE_PATH, 'rb') as f:
            contents = f.read()
            request.create_response(
                status_code=200,
                body=contents,
                headers={"Content-Type": "application/javascript"},
            )

def setupDriver():
    chrome_options = Options()
    chrome_options.add_argument("--headless") # Uncomment this to run the replays without GUI
    chrome_options.add_argument(f'user-agent={USER_AGENT}')

    prefs = {}
    prefs["profile.default_content_settings.popups"] = 0
    prefs["download.default_directory"] = DOWNLOAD_FOLDER_PATH
    chrome_options.add_experimental_option("prefs", prefs)

    driver = webdriver.Chrome(options=chrome_options)

    driver.request_interceptor = interceptor
    driver.scopes = ['.*jezevec10.*'] # Limit proxying to sites with jezevec10
    return driver

# Synchronously polls to see if a file has been created
def wait_for_file(file_path, timeout):
    time_counter = 0
    while not os.path.exists(file_path):
        time.sleep(1)
        time_counter += 1
        if time_counter > timeout:break
    if not os.path.isfile(file_path):
        raise ValueError("%s isn't a file!" % file_path)
    print(f'File downloaded: {file_path}')
    return True

def runReplay(driver, replay, replayID):
    #Sets replay text
    driver.execute_script(f"document.getElementById('{REPLAY_TEXT_ID}').value='{replay}'")

    loadButton = driver.find_element(By.ID, LOAD_BUTTON_ID)
    loadButton.click()

    # Wait for modified replayer to create a json download link for us to click
    wait = WebDriverWait(driver, 10, poll_frequency=1, ignored_exceptions=[ElementNotVisibleException, ElementNotSelectableException])
    downloadButton = WebDriverWait(driver, 60).until(
        EC.presence_of_element_located((By.ID, DOWNLOAD_BTN_ID))
    )
    
    pauseButton = driver.find_element(By.ID, PAUSE_BUTTON_ID)
    pauseButton.click()

    # Download link gives a file named "replay.json" every time, so we rename it
    url = downloadButton.get_attribute('href')
    default_file_path = os.path.join(DOWNLOAD_FOLDER_PATH, DEFAULT_REPLAY_FILENAME)
    downloadButton.click()
    if wait_for_file(default_file_path, 10):
        numbered_file_path = os.path.join(DOWNLOAD_FOLDER_PATH, NUMBERED_REPLAY_FORMAT % replayID)
        os.rename(default_file_path, numbered_file_path)

def tearDownDriver(driver):
    del driver.request_interceptor
    driver.quit()

# =================================================================== #
# Create a new instance of the Chrome driver
driver = setupDriver()

games_file_path = os.path.join(GAMES_FOLDER_PATH, GAMES_JSON_FILENAME)
games = loadGames(games_file_path)

COUNT_START = 0
COUNT_STOP = len(games)

# Go to the replayer page
driver.get(REPLAY_PAGE_URL)
for i in range(COUNT_START, COUNT_STOP):
    replayText = games[i]
    failures = 0
    while failures < MAX_FAILURES:
        try:
            runReplay(driver, replayText, i)
            print(f"Downloaded game {i}/{COUNT_STOP}")
            break
        except:
            failures += 1
            time.sleep(FAILURE_TIMEOUT)
 
tearDownDriver(driver)