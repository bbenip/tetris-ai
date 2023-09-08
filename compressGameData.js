import data from './replayer/input_games/games.json' assert { type: 'json' };
import fs from 'fs';

import LZString from 'lz-string';

const compressedData = data.map(game => {
    return LZString.compressToEncodedURIComponent(JSON.stringify(game))
})
//console.log(compressedData[0])

fs.writeFile('./replayer/input_games/replayStrings.json', JSON.stringify(compressedData), 'utf8', ()=>{});