import { getBubbleSortSteps } from "../Algorithms/BubbleSort";
import { getCocktailShakerSortSteps } from "../Algorithms/CoktailShakerSort";
import { getShellSortSteps } from "../Algorithms/ShellSort";
import { Algorithms, SortAlgorithms } from "./Types";

export const algorithms: SortAlgorithms = {
  [Algorithms.bubbleSort]: getBubbleSortSteps,
  [Algorithms.shellSort]: getShellSortSteps,
  [Algorithms.cocktailshakersort]: getCocktailShakerSortSteps,
};
