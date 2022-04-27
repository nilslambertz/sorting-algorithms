import { getBubbleSortSteps } from "../Algorithms/BubbleSort";
import { getCocktailShakerSortSteps } from "../Algorithms/CoktailShakerSort";
import { getCombSortSteps } from "../Algorithms/CombSort";
import { getInsertionSortSteps } from "../Algorithms/InsertionSort";
import { getShellSortSteps } from "../Algorithms/ShellSort";
import { Algorithms, SortAlgorithms } from "./Types";

export const algorithms: SortAlgorithms = {
  [Algorithms.bubbleSort]: getBubbleSortSteps,
  [Algorithms.cocktailshakerSort]: getCocktailShakerSortSteps,
  [Algorithms.combSort]: getCombSortSteps,
  [Algorithms.insertionSort]: getInsertionSortSteps,
  [Algorithms.shellSort]: getShellSortSteps,
};
