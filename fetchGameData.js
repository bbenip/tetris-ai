import axios from 'axios';
import fs from 'fs';

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

const fetchGameData = async (ids) => {
  console.log('Fetch game data');

  const BATCH_SIZE = 100;
  const numIds = ids.length;

  const numBatches = Math.ceil(numIds / BATCH_SIZE);
  const batches = Array.from({ length: numBatches });

  await batches.reduce(
    async (previousBatchPromise, _batchValue, batchIndex) => {
      await(previousBatchPromise);

      process.stdout.write('\n');

      const currentBatchSize = Math.min((batchIndex + 1) * BATCH_SIZE, numIds) - (batchIndex * BATCH_SIZE);

      const tempArray = Array.from({ length: currentBatchSize });
      const gameData = await tempArray.reduce(
        async (accumulatorPromise, _value, index) => {
          const currentGameData = await(accumulatorPromise);

          const id = ids[(batchIndex * BATCH_SIZE) + index];

          while (true) {
            try {
              const { data: gameDatum } = await axios({
                method: 'get',
                url: `https://jstris.jezevec10.com/replay/data?id=${id}&type=0`,
              });

              process.stdout.clearLine(0);
              process.stdout.cursorTo(0);
              process.stdout.write(`Batch: ${batchIndex + 1}/${numBatches}, Progress: ${index + 1}/${currentBatchSize}`);

              return [...currentGameData, gameDatum];
            } catch (error) {
              process.stdout.write('\n');
              console.error(error);

              await sleep(30_000);
            }
          }
        },
        Promise.resolve([]),
      );

      process.stdout.write('\n');

      console.log('Save game data batch to JSON file');

      fs.writeFile(
        `artifacts/gameData${batchIndex}.json`,
        JSON.stringify(gameData, null, 2),
        (error) => {
          if (error) {
            throw error;
          }
        },
      );
    },
    Promise.resolve(),
  );
}

const gameIds = JSON.parse(fs.readFileSync('artifacts/gameIds.json'));

fetchGameData(gameIds);
