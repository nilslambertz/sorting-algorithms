let swap = [];
let array = [];

function bubbleSort() {
    for (let n = array.length; n > 1; n--) {
        for (let i = 0; i < n - 1; i++) {
            let a = {
                firstIndex: i,
                swapElements: false
            }
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                a.swapElements = true;
            }
            swap.push(a);
        }
    }
}

function doBubbleSort(arr) {
    swap = [];
    array = arr;
    bubbleSort();
    return swap;
}

export { doBubbleSort };