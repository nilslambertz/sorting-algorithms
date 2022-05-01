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
      const firstStep: StepDetails = {
        firstHighlight: i,
        secondHighlight: i + gap,
      };
      steps.push(firstStep);

      if (array[i] > array[i + gap]) {
        let temp = array[i];
        array[i] = array[i + gap];
        array[i + gap] = temp;

        const secondStep: StepDetails = {
          firstHighlight: i + gap,
          secondHighlight: i,
          swap: [[i, i + gap]],
        };
        steps.push(secondStep);
      }
    }
  }
  return steps;
}

export const getCombSortSteps = (arr: number[]): StepDetails[] => {
  return combSort([...arr]);
};
