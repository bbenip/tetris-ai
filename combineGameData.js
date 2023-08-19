import fs from 'fs';

const isEmptyObject = (obj) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

const combineGameData = () => {
  const fileNames = fs.readdirSync('artifacts').filter((name) => name.match(/gameData\d+.json/i))
  const rawGameData = fileNames.map((fileName) => {
    const games = JSON.parse(fs.readFileSync(`artifacts/${fileName}`));
    const filteredGames = games.filter((game) => !isEmptyObject(game))

    return filteredGames;
  });

  return rawGameData.reduce((accumulator, data) => [...accumulator, ...data], []);
};

const gameData = combineGameData();

fs.writeFile(
  'artifacts/gameData.json',
  JSON.stringify(gameData, null, 2),
  (error) => {
    if (error) {
      throw error;
    }
  }
);
