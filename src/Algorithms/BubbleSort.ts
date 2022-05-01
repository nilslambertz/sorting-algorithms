import { StepDetails } from "../Utils/Types";

function bubbleSort(array: number[]): StepDetails[] {
  const steps: StepDetails[] = [];

  for (let n = array.length; n > 1; n--) {
    for (let i = 0; i < n - 1; i++) {
      const firstStep: StepDetails = {
        firstHighlight: i,
        secondHighlight: i + 1,
      };
      steps.push(firstStep);

      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        const swap: [number, number][] = [[i, i + 1]];

        const secondStep = {
          swap: swap,
          firstHighlight: i + 1,
          secondHighlight: i,
        };
        steps.push(secondStep);
      }
    }
  }

  return steps;
}

export const getBubbleSortSteps = (arr: number[]): StepDetails[] => {
  const array = [...arr];

  return bubbleSort(array);
};
