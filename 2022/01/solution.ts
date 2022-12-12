function mostCalories() {
  const input: string = fs
    .readFileSync(__dirname + "/input.txt", "utf-8")
    .trim();

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
