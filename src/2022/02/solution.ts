import { getInput } from '../input.js';

const input: Array<string> = getInput();

const outcomes = new Map([
  ['A X', 4],
  ['A Y', 8],
  ['A Z', 3],
  ['B X', 1],
  ['B Y', 5],
  ['B Z', 9],
  ['C X', 7],
  ['C Y', 2],
  ['C Z', 6],
]);

const points = new Map([
  ['A', 1],
  ['B', 2],
  ['C', 3],
]);

/**
 * Part 1, get the score of a rock, paper, scissors tournament
 * @returns
 */
function getTotalPoints(): number {
  return input.reduce((score: number, round: string) => score + outcomes.get(round), 0);
}

/** Part 2
 *  Get score based on guide
 */
function getScore() {
  const getScore = (symbole: number): number => points.get(String.fromCharCode(symbole))!;

  return input.reduce((score: number, round: string) => {
    let charCode: number = round[0].charCodeAt(0);
    return (
      score +
      ((outcome: string) => {
        switch (outcome) {
          // lose
          case 'X': {
            charCode = charCode - 1;
            return getScore(charCode < 65 ? 67 : charCode);
          }
          // win
          case 'Z': {
            charCode = charCode + 1;
            return getScore(charCode > 67 ? 65 : charCode) + 6;
          }
          // draw
          default: {
            return getScore(charCode) + 3;
          }
        }
      })(round[2])
    );
  }, 0);
}
