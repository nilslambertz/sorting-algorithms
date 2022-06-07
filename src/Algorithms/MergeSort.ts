import { swapArrayElements } from "../Utils/Functions";
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
      steps.push({
        firstHighlight: left,
        secondHighlight: right,
      });

      if (array[left] > array[right]) {
        swapArrayElements(array, left, right);

        steps.push({
          firstHighlight: right,
          secondHighlight: left,
          swap: [[left, right]],
        });
      }
    } else {
      let i = Math.floor((right + left) / 2);

      steps.push({
        firstArea: [left, i],
        secondArea: [i + 1, right],
      });

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
    steps.push({
      firstHighlight: j,
      secondHighlight: j - 1,
      firstArea: [left, j],
      secondArea: [j + 1, right],
    });

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
        swapArrayElements(array, x, x - 1);
        swaps.push([x, x - 1]);
      }

      steps.push({
        firstHighlight: firstBigger,
        secondHighlight: j,
        firstArea: [left, j],
        secondArea: [j + 1, right],
        swap: swaps,
      });
    }
    j++;
  }
}

export const getMergeSortSteps = (arr: number[]): StepDetails[] => {
  return mergeSort([...arr], [], 0, arr.length - 1);
};
