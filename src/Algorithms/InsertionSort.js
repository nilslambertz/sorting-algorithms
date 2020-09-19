let swap;
let array;

function insertionSort() {
    for(let i = 0; i < array.length; i++) {
        swap.push({
            firstIndex: i
        });
        let temp = array[i];
        let j = i;
        while(j > 0 && array[j-1] > temp) {
            array[j] = array[j-1];
            j--;
        }
        swap.push({
            firstIndex: i,
            correctPosition: j
        });
        array[j] = temp;
    }
}


function getInsertionSortSwap(arr) {
    swap = [];
    array = arr;
    insertionSort();
    return swap;
}

export { getInsertionSortSwap };