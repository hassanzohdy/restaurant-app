export * from "./types";

export function createArray(N) {
  return [...Array(N).keys()].map(i => i + 1);
}
