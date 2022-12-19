import { readFileSync } from 'fs'

export const getInput = () => readFileSync(__dirname + "/input.txt", "utf-8").trim().split('\n');