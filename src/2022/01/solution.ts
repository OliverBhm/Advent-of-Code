import { getInput } from "../input.js";

const input: Array<number> = getInput().map(Number);

export function partOne() {
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

function partTwo() {
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
