import { swapArrayElements } from "../Utils/Functions";
import { StepDetails } from "../Utils/Types";

function combSort(array: number[]): StepDetails[] {
  const steps: StepDetails[] = [];

  let gap = array.length;
  let shrink = 1.3;
  let sorted = false;

  while (!sorted) {
    gap = Math.floor(gap / shrink);
    if (gap < 1) {
      gap = 1;
      sorted = true;
    }

    for (let i = 0; i + gap < array.length; i++) {
      steps.push({
        firstHighlight: i,
        secondHighlight: i + gap,
      });

      if (array[i] > array[i + gap]) {
        swapArrayElements(array, i, i + gap);

        steps.push({
          firstHighlight: i + gap,
          secondHighlight: i,
          swap: [[i, i + gap]],
        });
      }
    }
  }
  return steps;
}

export const getCombSortSteps = (arr: number[]): StepDetails[] => {
  return combSort([...arr]);
};
