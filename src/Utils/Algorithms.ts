import { getBubbleSortSteps } from "../Algorithms/BubbleSort";
import { getCocktailShakerSortSteps } from "../Algorithms/CoktailShakerSort";
import { getCombSortSteps } from "../Algorithms/CombSort";
import { getShellSortSteps } from "../Algorithms/ShellSort";
import { Algorithms, SortAlgorithms } from "./Types";

export const algorithms: SortAlgorithms = {
  [Algorithms.bubbleSort]: getBubbleSortSteps,
  [Algorithms.cocktailshakersort]: getCocktailShakerSortSteps,
  [Algorithms.combsort]: getCombSortSteps,
  [Algorithms.shellSort]: getShellSortSteps,
};
