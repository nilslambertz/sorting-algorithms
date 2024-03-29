import { getBubbleSortSteps } from "../Algorithms/BubbleSort";
import { getCocktailShakerSortSteps } from "../Algorithms/CocktailShakerSort";
import { getCombSortSteps } from "../Algorithms/CombSort";
import { getInsertionSortSteps } from "../Algorithms/InsertionSort";
import { getMergeSortSteps } from "../Algorithms/MergeSort";
import { getPancakeSortSteps } from "../Algorithms/PancakeSort";
import { getQuickSortSteps } from "../Algorithms/QuickSort";
import { getShellSortSteps } from "../Algorithms/ShellSort";
import { Algorithms, SortAlgorithms } from "./Types";

export const algorithms: SortAlgorithms = {
  [Algorithms.bubbleSort]: getBubbleSortSteps,
  [Algorithms.cocktailshakerSort]: getCocktailShakerSortSteps,
  [Algorithms.combSort]: getCombSortSteps,
  [Algorithms.insertionSort]: getInsertionSortSteps,
  [Algorithms.mergeSort]: getMergeSortSteps,
  [Algorithms.pancakeSort]: getPancakeSortSteps,
  [Algorithms.quickSort]: getQuickSortSteps,
  [Algorithms.shellSort]: getShellSortSteps,
};
