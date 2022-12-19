import { getInput } from "../input.js";

const input: Array<string> = getInput();

const getPriority = (char: string): number =>
  char.charCodeAt(0) - (char.toLowerCase() === char ? 96 : 38);

function getItemSum(): number {
  let total: number = 0;

  input.forEach((items) => {
    const half: number = items.length / 2;
    const left: Set<string> = new Set<string>(items.substring(0, half));

    for (let i: number = half; i < items.length; i++) {
      if (left.has(items[i])) {
        total += getPriority(items[i]);
        break;
      }
    }
  });

  return total;
}

function getBadgeTotal(): number {
  let total = 0;

  for (let i = 0; i < input.length; i += 3) {
    const first = new Set(input[i]);
    const second = new Set(input[i + 1]);

    for (let j = 0; j < input[i + 2].length; j++) {
      const char: string = input[i + 2][j];
      if (first.has(char) && second.has(char)) {
        total += getPriority(char);
        break;
      }
    }
  }

  return total;
}
