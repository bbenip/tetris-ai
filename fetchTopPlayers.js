import axios from 'axios';
import fs from 'fs';

const fetchTopPlayers = async (numPlayers) => {
  console.log('Get top player data');

  // Each call pulls 500 players from the leaderboard
  // Reference: https://jezevec10.github.io/jstris-api-docs/#/?id=leaderboards
  const PLAYERS_PER_REQUEST = 500;
  const numRequests = Math.ceil(numPlayers / PLAYERS_PER_REQUEST);

  const temporaryArray = new Array(numRequests).fill(0);
  const players = await temporaryArray.reduce(
    async (accumulatorPromise, _current, index) => {
      const { data: newPlayers } = await axios({
        method: 'get',
        url: `https://jstris.jezevec10.com/api/leaderboard/1?mode=1&offset=${index}`,
      });

      return [...await(accumulatorPromise), ...newPlayers];
    },
    Promise.resolve([])
  );

  const topPlayers = players.slice(0, numPlayers);

  console.log('Save player data to JSON file');

  fs.mkdirSync('artifacts', { recursive: true }, (error) => {
    if (error) {
      throw error;
    }
  });

  fs.writeFile(
    'artifacts/playerData.json',
    JSON.stringify(topPlayers, null, 2),
    (error) => {
      if (error) {
        console.error(error);
      }
    }
  );
};

fetchTopPlayers(100);
