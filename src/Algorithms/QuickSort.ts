import { swapArrayElements } from "../Utils/Functions";
import { StepDetails } from "../Utils/Types";

function quickSort(
  array: number[],
  steps: StepDetails[],
  left: number,
  right: number
) {
  if (left >= right) {
    return steps;
  }

  const mid = Math.floor((right + left) / 2);
  steps.push({
    firstArea: [left, mid],
    secondArea: [mid + 1, right],
  });

  let j = partition(array, steps, left, right);
  quickSort(array, steps, left, j - 1);
  quickSort(array, steps, j + 1, right);

  return steps;
}

function partition(
  array: number[],
  steps: StepDetails[],
  left: number,
  right: number
) {
  let x = array[right];
  let i = left;
  let j = right - 1;

  const mid = Math.floor((right + left) / 2);

  while (i < j) {
    while (i < right && array[i] < x) {
      steps.push({
        firstHighlight: i,
        secondHighlight: j,
        firstArea: [left, mid],
        secondArea: [mid + 1, right],
      });

      i++;
    }
    while (j > left && array[j] >= x) {
      steps.push({
        firstHighlight: i,
        secondHighlight: j,
        firstArea: [left, mid],
        secondArea: [mid + 1, right],
      });

      j--;
    }
    if (i < j) {
      swapArrayElements(array, i, j);

      steps.push({
        firstHighlight: j,
        secondHighlight: i,
        firstArea: [left, mid],
        secondArea: [mid + 1, right],
        swap: [[i, j]],
      });
    }
  }
  if (array[i] > x) {
    swapArrayElements(array, i, right);

    steps.push({
      firstHighlight: right,
      secondHighlight: i,
      firstArea: [left, mid],
      secondArea: [mid + 1, right],
      swap: [[i, right]],
    });
  }
  return i;
}

export const getQuickSortSteps = (arr: number[]): StepDetails[] => {
  return quickSort([...arr], [], 0, arr.length - 1);
};
