import axios from 'axios';

const MAX_NUM_PLAYERS = 100;

const getTopPlayers = async (numPlayers) => {
  console.log('Get top player data');

  // Each call pulls 500 players from the leaderboard
  // Reference: https://jezevec10.github.io/jstris-api-docs/#/?id=leaderboards
  const PLAYERS_PER_REQUEST = 500;
  const numRequests = Math.ceil(numPlayers / PLAYERS_PER_REQUEST);

  console.log(numRequests);
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

  return players;
};

const main = async () => {
  console.log('Start Tetris data request script');

  const players = await getTopPlayers(MAX_NUM_PLAYERS);
  const usernames = players.map(({ name }) => name);

  console.log(JSON.stringify(usernames));
};

main();
