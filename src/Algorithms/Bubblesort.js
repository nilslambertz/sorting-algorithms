//import { endAnimation } from "../Utils/Animation";

let swap = [];
let array = [];

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

function animateBubbleSort(array, swap, speed, interval) {
    interval = setInterval(() => {
        if(swap.length === 0) {
         //   endAnimation(true);
            return;
        }
        let x = swap.shift();
        let first = x.firstIndex;

        if(x.elementsSwapped === true) {
            let array = [...this.state.array];
            let temp = array[first];
            array[first] = array[first+1];
            array[first+1] = temp;
            this.setState({array, firstIndex: first+1, secondIndex: first});
        } else {
            this.setState({firstIndex: first, secondIndex: first+1});
        }
    }, speed);
}

export { getBubbleSortSwap, animateBubbleSort };