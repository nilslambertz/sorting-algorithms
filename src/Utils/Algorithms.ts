import { getBubbleSortSteps } from "../Algorithms/BubbleSort";
import { getShellSortSteps } from "../Algorithms/ShellSort";
import { Algorithms, SortAlgorithms } from "./Types";

export const algorithms: SortAlgorithms = {
  [Algorithms.bubbleSort]: getBubbleSortSteps,
  [Algorithms.shellSort]: getShellSortSteps,
};
