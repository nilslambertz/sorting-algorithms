let swap;
let array;

function bubbleSort() {
    for (let n = array.length; n > 1; n--) {
        for (let i = 0; i < n - 1; i++) {
            let a = {
                firstIndex: i,
                elementsSwapped: false
            }
            swap.push(a);
            if (array[i] > array[i + 1]) {
                a = {
                    firstIndex: i,
                    elementsSwapped: true
                }
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swap.push(a);
            }
        }
    }
}

function getBubbleSortSwap(arr) {
    swap = [];
    array = arr;
    bubbleSort();
    return swap;
}

export { getBubbleSortSwap };