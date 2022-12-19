import { getInput } from "../input.js";

const input: Array<number> = getInput().map(Number);

/**
 * Part 1, get the elve carrying the most calories.
 * @returns 
 */
export function topElve() {
  let most = 0;

  let elve = 0;
  input.forEach((calory: number) => {
    elve += calory;
    if (calory === 0) {
      most = elve > most ? elve : calory;
      elve = 0;
    }
  });

  return most;
}

/**
 * Part 2 Get the top three elves carrying the most calories
 * @returns 
 */
function getTopThreeElves() {
  const lowest = Number.NEGATIVE_INFINITY;
  let top = [lowest, lowest, lowest];

  let elve = 0;
  input.forEach((calory) => {
    elve += calory;
    if (calory === 0) {
      if (elve > top[0]) {
        top[0] = elve;
        top.sort((a, b) => a - b);
      }
      elve = 0;
    }
  });

  return top[0] + top[1] + top[2];
}
