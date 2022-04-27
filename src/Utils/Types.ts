export interface StepDetails {
  swap?: number[][];
  firstHighlight?: number;
  secondHighlight?: number;
  firstArea?: [number, number];
  secondArea?: [number, number];
}

export interface SortAlgorithm {
  name: string;
  generateStepFunction: (array: number[]) => StepDetails[];
}
