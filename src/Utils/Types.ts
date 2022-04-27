export interface StepDetails {
  swap?: number[][];
  firstHighlight?: number;
  secondHighlight?: number;
  firstArea?: [number, number];
  secondArea?: [number, number];
}

export type SortAlgorithms = {
  [key in Algorithms]: (arr: number[]) => StepDetails[];
};

export enum Algorithms {
  bubbleSort = "bubblesort",
  shellSort = "shellsort",
}
