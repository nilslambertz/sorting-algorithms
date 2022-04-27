import { getBubbleSortSteps } from "../Algorithms/BubbleSort";
import { SortAlgorithm } from "./Types";

export const algorithms: SortAlgorithm[] = [
  {
    name: "bubblesort",
    generateStepFunction: getBubbleSortSteps,
  },
];
