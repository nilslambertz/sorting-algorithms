import { StepDetails } from "../Utils/Types";

function insertionSort(array: number[]): StepDetails[] {
  const steps: StepDetails[] = [];

  for (let i = 0; i < array.length; i++) {
    const swaps: [number, number][] = [];
    steps.push({
      firstHighlight: i,
    });

    let temp = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];

      swaps.push([j - 1, j]);

      j--;
    }

    steps.push({
      secondHighlight: j,
      swap: swaps,
    });

    array[j] = temp;
  }

  return steps;
}

export const getInsertionSortSteps = (arr: number[]): StepDetails[] => {
  return insertionSort([...arr]);
};
