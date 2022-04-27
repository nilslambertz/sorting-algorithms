export const arrayIsSorted = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

export const generateArray = (numberOfElems: number, maxValue: number) => {
  let allValues = [...Array(maxValue).keys()];
  let array = [];
  for (let i = 0; i < numberOfElems; i++) {
    array[i] =
      allValues.splice(Math.floor(Math.random() * allValues.length), 1)[0] + 10;
  }
  return array;
};

export const swapArrayElements = (
  arr: number[],
  firstIndex: number,
  secondIndex: number
) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};
