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
  let accumulator: number = 0;
  return elvesCalories
    .trim()
    .split("\n")
    .map((calory) => Number(calory))
    .reduce((accu, calory) => {
      accumulator += calory;
      if (calory === 0) {
        accu.push(accumulator);
        accumulator = 0;
      }
      return accu;
    }, [])
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((accu, elve) => accu + elve);
}
