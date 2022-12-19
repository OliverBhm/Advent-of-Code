import { getInput } from "../input.js";

const input: Array<string> = getInput()

function getItemSum(): number {
    let total: number = 0;
  
    input.forEach((items) => {
      const half: number = items.length / 2;
      const left: Set<string> = new Set<string>(items.substring(0, half));
  
      for (let i: number = half; i < items.length; i++) {
        if (left.has(items[i])) {
          total +=
            items[i].charCodeAt(0) -
            (items[i].toLowerCase() === items[i] ? 96 : 38);
          break;
        }
      }
    });
  
    return total;
  }
  