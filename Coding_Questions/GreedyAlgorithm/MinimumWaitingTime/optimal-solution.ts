export function minimumWaitingTime(queries: number[]) {
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;
  for (let index = 0; index < queries.length; index++) {
    const duration = queries[index];
    const queriesLeft = queries.length - (index + 1);
    totalWaitingTime += duration * queriesLeft;
  }

  return totalWaitingTime;
}
