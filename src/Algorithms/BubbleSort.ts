import { swapArrayElements } from "../Utils/Functions";
import { StepDetails } from "../Utils/Types";

function bubbleSort(array: number[]): StepDetails[] {
  const steps: StepDetails[] = [];

  for (let n = array.length; n > 1; n--) {
    for (let i = 0; i < n - 1; i++) {
      steps.push({
        firstHighlight: i,
        secondHighlight: i + 1,
      });

      if (array[i] > array[i + 1]) {
        swapArrayElements(array, i, i + 1);

        steps.push({
          swap: [[i, i + 1]],
          firstHighlight: i + 1,
          secondHighlight: i,
        });
      }
    }
  }

  return steps;
}

export const getBubbleSortSteps = (arr: number[]): StepDetails[] => {
  return bubbleSort([...arr]);
};
