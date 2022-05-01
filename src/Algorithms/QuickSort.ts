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
  const firstStep: StepDetails = {
    firstArea: [left, mid],
    secondArea: [mid + 1, right],
  };
  steps.push(firstStep);

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
      const firstStep: StepDetails = {
        firstHighlight: i,
        secondHighlight: j,
        firstArea: [left, mid],
        secondArea: [mid + 1, right],
      };
      steps.push(firstStep);

      i++;
    }
    while (j > left && array[j] >= x) {
      const firstStep: StepDetails = {
        firstHighlight: i,
        secondHighlight: j,
        firstArea: [left, mid],
        secondArea: [mid + 1, right],
      };
      steps.push(firstStep);

      j--;
    }
    if (i < j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;

      const secondStep: StepDetails = {
        firstHighlight: j,
        secondHighlight: i,
        firstArea: [left, mid],
        secondArea: [mid + 1, right],
        swap: [[i, j]],
      };
      steps.push(secondStep);
    }
  }
  if (array[i] > x) {
    let temp = array[i];
    array[i] = array[right];
    array[right] = temp;

    const thirdStep: StepDetails = {
      firstHighlight: right,
      secondHighlight: i,
      firstArea: [left, mid],
      secondArea: [mid + 1, right],
      swap: [[i, right]],
    };
    steps.push(thirdStep);
  }
  return i;
}

export const getQuickSortSteps = (arr: number[]): StepDetails[] => {
  return quickSort([...arr], [], 0, arr.length - 1);
};
