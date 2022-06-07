import { swapArrayElements } from "../Utils/Functions";
import { StepDetails } from "../Utils/Types";

function cocktailShakerSort(array: number[]): StepDetails[] {
  const steps: StepDetails[] = [];

  let leftSorted = 0;
  let rightSorted = array.length - 1;
  while (leftSorted <= rightSorted) {
    let newLeftsorted = rightSorted;
    let newRightSorted = leftSorted;
    for (let i = leftSorted; i < rightSorted + 1; i++) {
      steps.push({
        firstHighlight: i,
        secondHighlight: i + 1,
      });

      if (array[i] > array[i + 1]) {
        swapArrayElements(array, i, i + 1);

        steps.push({
          firstHighlight: i + 1,
          secondHighlight: i,
          swap: [[i, i + 1]],
        });

        newRightSorted = i;
      }
    }
    rightSorted = newRightSorted - 1;
    for (let i = rightSorted; i > leftSorted - 1; i--) {
      steps.push({
        firstHighlight: i,
        secondHighlight: i + 1,
      });

      if (array[i] > array[i + 1]) {
        swapArrayElements(array, i, i + 1);

        steps.push({
          firstHighlight: i + 1,
          secondHighlight: i,
          swap: [[i, i + 1]],
        });

        newLeftsorted = i;
      }
    }
    leftSorted = newLeftsorted + 1;
  }

  return steps;
}

export const getCocktailShakerSortSteps = (arr: number[]): StepDetails[] => {
  return cocktailShakerSort([...arr]);
};
