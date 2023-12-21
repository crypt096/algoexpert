export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  const numberOfCoins: number[] = new Array(n+1).fill(Infinity);
  numberOfCoins[0] = 0;

  for(const denom of denoms) {
    for(let amount = 0; amount < numberOfCoins.length; amount++) {
      if (denom <= amount) {
        numberOfCoins[amount] = Math.min(numberOfCoins[amount], numberOfCoins[amount - denom] + 1);
      }
    }
  }

  return numberOfCoins[n] !== Infinity ? numberOfCoins[n] : -1;
}
