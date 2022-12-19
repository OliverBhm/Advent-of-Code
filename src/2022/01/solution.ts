import {fs} from 'fs';

const input: string = fs
    .readFileSync(__dirname + "/input.txt", "utf-8")
    .trim();

const isNewLine = (char) => char.charCodeAt(0) === 10;

function partOne() {
  let mostColories = 0;

  let calory = "";
  let elve = 0;
  for (let i = 0; i < input.length; i++) {
    calory += input[i];
    if (isNewLine(input[i])) {
      elve += Number(calory);
      calory = "";

      if (isNewLine(input[i + 1])) {
        mostColories = mostColories > elve ? mostColories : elve;
        elve = 0;
      }
    }
  }

  return mostColories;
}

function partTwo() {
  const lowest = Number.NEGATIVE_INFINITY;
  let top = [lowest, lowest, lowest];

  let elve = 0;
  input
    .split("\n")
    .map(Number)
    .forEach((calory) => {
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
