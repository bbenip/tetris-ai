import axios from 'axios';
import fs from 'fs';

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

const fetchGameIds = async (usernames) => {
  console.log('Get game IDs');

  process.stdout.write('\n');

  const gameIds = await usernames.reduce(
    async (accumulatorPromise, username, index) => {
      const currentGameIds = await(accumulatorPromise);

      const { data: rawSprintData } = await axios({
        method: 'get',
        url: `https://jstris.jezevec10.com/u/${username}/stats?mode=1&finesse=true`,
      });

      const sprintData = JSON.parse(rawSprintData.match(/var data = '(.*)'/)[1]);
      const newGameIds = [...sprintData.skyline.map(({ id }) => id), ...sprintData.unused.map(({ id }) => id)];

      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(`Progress: ${index + 1}/${usernames.length}`);

      await sleep(2_000);

      return [...currentGameIds, ...newGameIds];
    },
    []
  );

  process.stdout.write('\n');

  console.log('Save game IDs to JSON file');

  fs.writeFile(
    'artifacts/gameIds.json',
    JSON.stringify(gameIds, null, 2),
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
};

const playerData = JSON.parse(fs.readFileSync('artifacts/playerData.json'));
const usernames = playerData.map(({ name }) => name);

fetchGameIds(usernames);
