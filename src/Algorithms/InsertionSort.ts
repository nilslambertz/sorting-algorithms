import { StepDetails } from "../Utils/Types";

function insertionSort(array: number[]): StepDetails[] {
  const steps: StepDetails[] = [];

  for (let i = 0; i < array.length; i++) {
    const swaps: [number, number][] = [];
    const firstStep: StepDetails = {
      firstHighlight: i,
    };
    steps.push(firstStep);

    let temp = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];

      swaps.push([j - 1, j]);

      j--;
    }

    const secondStep: StepDetails = {
      secondHighlight: j,
      swap: swaps,
    };
    steps.push(secondStep);

    array[j] = temp;
  }

  return steps;
}

export const getInsertionSortSteps = (arr: number[]): StepDetails[] => {
  const array = [...arr];

  return insertionSort(array);
};
