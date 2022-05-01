import { StepDetails } from "../Utils/Types";

function mergeSort(
  array: number[],
  steps: StepDetails[],
  left: number,
  right: number
) {
  if (right - left === 0) {
    // nothing to do
  } else {
    if (right - left === 1) {
      const firstStep: StepDetails = {
        firstHighlight: left,
        secondHighlight: right,
      };
      steps.push(firstStep);

      if (array[left] > array[right]) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;

        const secondStep: StepDetails = {
          firstHighlight: right,
          secondHighlight: left,
          swap: [[left, right]],
        };
        steps.push(secondStep);
      }
    } else {
      let i = Math.floor((right + left) / 2);

      const thirdStep: StepDetails = {
        firstArea: [left, i],
        secondArea: [i + 1, right],
      };
      steps.push(thirdStep);

      mergeSort(array, steps, left, i - 1);
      mergeSort(array, steps, i, right);
      merge(array, steps, left, right, i);
    }
  }

  return steps;
}

function merge(
  array: number[],
  steps: StepDetails[],
  left: number,
  right: number,
  mid: number
) {
  let j = mid;
  while (j <= right) {
    const firstStep: StepDetails = {
      firstHighlight: j,
      secondHighlight: j - 1,
      firstArea: [left, j],
      secondArea: [j + 1, right],
    };
    steps.push(firstStep);

    if (array[j] < array[j - 1]) {
      let firstBigger = left;
      for (let x = left; x < j; x++) {
        if (array[x] > array[j]) {
          firstBigger = x;
          break;
        }
      }

      const swaps: [number, number][] = [];
      for (let x = j; x > firstBigger; x--) {
        let temp = array[x];
        array[x] = array[x - 1];
        array[x - 1] = temp;
        swaps.push([x, x - 1]);
      }

      const secondStep: StepDetails = {
        firstHighlight: firstBigger,
        secondHighlight: j,
        firstArea: [left, j],
        secondArea: [j + 1, right],
        swap: swaps,
      };
      steps.push(secondStep);
    }
    j++;
  }
}

export const getMergeSortSteps = (arr: number[]): StepDetails[] => {
  return mergeSort([...arr], [], 0, arr.length - 1);
};
