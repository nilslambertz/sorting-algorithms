import { StepDetails } from "../Utils/Types";

function cocktailShakerSort(array: number[]): StepDetails[] {
  const steps: StepDetails[] = [];

  let leftSorted = 0;
  let rightSorted = array.length - 1;
  while (leftSorted <= rightSorted) {
    let newLeftsorted = rightSorted;
    let newRightSorted = leftSorted;
    for (let i = leftSorted; i < rightSorted + 1; i++) {
      const firstStep: StepDetails = {
        firstHighlight: i,
        secondHighlight: i + 1,
      };
      steps.push(firstStep);

      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        const secondStep: StepDetails = {
          firstHighlight: i + 1,
          secondHighlight: i,
          swap: [[i, i + 1]],
        };
        steps.push(secondStep);

        newRightSorted = i;
      }
    }
    rightSorted = newRightSorted - 1;
    for (let i = rightSorted; i > leftSorted - 1; i--) {
      const thirdStep: StepDetails = {
        firstHighlight: i,
        secondHighlight: i + 1,
      };
      steps.push(thirdStep);

      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        const thirdStep: StepDetails = {
          firstHighlight: i + 1,
          secondHighlight: i,
          swap: [[i, i + 1]],
        };
        steps.push(thirdStep);

        newLeftsorted = i;
      }
    }
    leftSorted = newLeftsorted + 1;
  }

  return steps;
}

export const getCocktailShakerSortSteps = (arr: number[]): StepDetails[] => {
  return cocktailShakerSort([...arr]);
};
