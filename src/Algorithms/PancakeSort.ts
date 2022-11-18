import { swapArrayElements } from "../Utils/Functions";
import { StepDetails } from "../Utils/Types";

const flip = (array: number[], endIndex: number, steps: StepDetails[]) => {
  let lastFlipIndex = endIndex;
  let i = 0;

  const flipSteps: [number, number][] = [];

  while (i < lastFlipIndex) {
    swapArrayElements(array, i, lastFlipIndex);
    flipSteps.push([i, lastFlipIndex]);
    i++;
    lastFlipIndex--;
  }

  steps.push({
    firstArea: [0, endIndex],
  });
  steps.push({
    swap: flipSteps,
  });
};

const findMaxIndex = (
  array: number[],
  endIndex: number,
  steps: StepDetails[]
) => {
  let maxIndex = 0;
  for (let i = 0; i < endIndex; i++) {
    steps.push({ firstHighlight: i });
    if (array[i] > array[maxIndex]) {
      maxIndex = i;
      steps.push({ importantHighlight: i });
    }
  }
  return maxIndex;
};

function pancakeSort(array: number[]) {
  const steps: StepDetails[] = [];

  for (let lastIndex = array.length; lastIndex > 1; lastIndex--) {
    let maxIndex = findMaxIndex(array, lastIndex, steps);

    if (maxIndex !== lastIndex - 1) {
      flip(array, maxIndex, steps);
      flip(array, lastIndex - 1, steps);
    }
  }

  return steps;
}

export const getPancakeSortSteps = (arr: number[]): StepDetails[] => {
  return pancakeSort([...arr]);
};
