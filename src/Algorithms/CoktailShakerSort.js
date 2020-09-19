let swap;
let array;

function cocktailShakerSort() {
    let leftSorted = 0;
    let rightSorted = array.length-1;
    while(leftSorted <= rightSorted) {
        let newLeftsorted = rightSorted;
        let newRightSorted = leftSorted;
        for(let i = leftSorted; i < rightSorted+1; i++) {
            let a = {
                firstIndex: i,
                swapped: false
            }
            swap.push(a);
            if(array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                a = {
                    firstIndex: i,
                    swapped: true
                }
                swap.push(a);
                newRightSorted = i;
            }
        }
        rightSorted = newRightSorted - 1;
        for(let i = rightSorted; i > leftSorted-1; i--) {
            let a = {
                firstIndex: i,
                swapped: false
            }
            swap.push(a);
            if(array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                a = {
                    firstIndex: i,
                    swapped: true
                }
                swap.push(a);
                newLeftsorted = i;
            }
        }
        leftSorted = newLeftsorted + 1;
    }
}

function getCocktailShakerSortSwap(arr) {
    swap = [];
    array = arr;
    cocktailShakerSort();
    return swap;
}

export { getCocktailShakerSortSwap };