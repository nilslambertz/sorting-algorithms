import { StepDetails } from "../Utils/Types";

function shellSort(array: number[]): StepDetails[] {
  const steps: StepDetails[] = [];

  let gaps = [701, 301, 132, 57, 23, 10, 4, 1]; // Marcin Ciura's gap sequence
  for (let gap of gaps) {
    for (let i = gap; i < array.length; i++) {
      const swaps: [number, number][] = [];

      let temp = array[i];
      let j;
      for (j = i; j >= gap && array[j - gap] > temp; j = j - gap) {
        array[j] = array[j - gap];
        swaps.push([j, j - gap]);
      }
      array[j] = temp;

      steps.push(
        {
          firstHighlight: i,
          secondHighlight: j,
        },
        {
          swap: swaps,
          firstHighlight: j,
          secondHighlight: i,
        }
      );
    }
  }

  return steps;
}

export const getShellSortSteps = (arr: number[]): StepDetails[] => {
  return shellSort([...arr]);
};
