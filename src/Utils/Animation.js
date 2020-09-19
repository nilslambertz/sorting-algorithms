import { getBubbleSortSwap } from "../Algorithms/Bubblesort";
import { arrayIsSorted } from "./Functions";
import {getInsertionSortSwap} from "../Algorithms/Insertionsort";
import {getMergeSortSwap} from "../Algorithms/Mergesort";
import {getQuickSortSwap} from "../Algorithms/Quicksort";

class Animation {
    setState;
    array;
    swap;
    algorithm;
    speed;
    interval;

    constructor(setState) {
        this.setState = setState;
        this.algorithm = 0;
        this.speed = 5;
        this.swap = [];
    }

    changeAlgorithm(algo) {
        this.algorithm = algo;
        this.swap = [];
    }

    changeArray(array) {
        this.array = array;
        this.swap = [];
    }

    changeSpeed(speed) {
        this.speed = 505 - speed;
    }

    startAnimation() {
        switch (this.algorithm) {
            case 0: {
                if(this.swap.length === 0) {
                    this.swap = getBubbleSortSwap(this.array.slice(0));
                }
                this.animate(this.bubbleSortStep);
                return true;
            }
            case 1: {
                if(this.swap.length === 0) {
                    this.swap = getInsertionSortSwap(this.array.slice(0));
                }
                this.animate(this.insertionSortStep);
                return true;
            }
            case 2: {
                if(this.swap.length === 0) {
                    this.swap = getMergeSortSwap(this.array.slice(0));
                }
                this.animate(this.mergeSortStep);
                return true;
            }
            case 3: {
                if(this.swap.length === 0) {
                    this.swap = getQuickSortSwap(this.array.slice(0));
                }
                this.animate(this.quickSortStep);
                return true;
            }
            default: {
                alert("error");
                return false;
            }
        }
    }

    endAnimation(finished) {
        clearInterval(this.interval);
        this.setState({animationRunning: false});
        if(finished) {
            this.setState({firstIndex: null, secondIndex: null, leftBorder: null, rightBorder: null, mid: null});
            if(arrayIsSorted(this.array)) {
                this.setState({sorted: true});
            }
        }
    }

    animate(step) {
        this.interval = setInterval(() => {
            if(this.swap.length === 0) {
                this.endAnimation(true);
                return;
            }
            step();
        }, this.speed);
    }

    bubbleSortStep = () => {
        let x = this.swap.shift();
        let first = x.firstIndex;

        if(x.elementsSwapped === true) {
            let temp = this.array[first];
            this.array[first] = this.array[first+1];
            this.array[first+1] = temp;
            this.setState({array: this.array, firstIndex: first, secondIndex: first+1});
        } else {
            this.setState({firstIndex: first+1, secondIndex: first});
        }
    }

    insertionSortStep = () => {
        let x = this.swap.shift();
        let firstIndex = x.firstIndex;
        let correctPosition = x.correctPosition;

        if(correctPosition !== undefined) {
            let temp = this.array[firstIndex];
            for(let j = firstIndex; j > correctPosition; j--) {
                this.array[j] = this.array[j-1];
            }
            this.array[correctPosition] = temp;
            this.setState({array: this.array, firstIndex: null, secondIndex: correctPosition});
        } else {
            this.setState({firstIndex: firstIndex, secondIndex: null});
        }
    }

    mergeSortStep = () => {
        let x = this.swap.shift();
        if(x.inMergeSort === true) {
            if(x.firstIndex !== undefined) {
                let firstIndex = x.firstIndex;
                let secondIndex = x.secondIndex;
                if(x.swapped === true) {
                    let temp = this.array[firstIndex];
                    this.array[firstIndex] = this.array[secondIndex];
                    this.array[secondIndex] = temp;
                    this.setState({array: this.array, firstIndex: secondIndex, secondIndex: firstIndex});
                } else {
                    this.setState({array: this.array, firstIndex: firstIndex, secondIndex: secondIndex});
                }
            } else {
                this.setState({leftBorder: x.leftBorder, rightBorder: x.rightBorder, mid: x.mid, firstIndex: null, secondIndex: null});
            }
        } else {
            let leftBorder = x.leftBorder;
            let rightBorder = x.rightBorder;
            let mid = x.mid;
            let firstIndex = x.firstIndex;
            let secondIndex = x.secondIndex;
            if(x.moved === false) {
                this.setState({leftBorder: leftBorder, rightBorder: rightBorder, mid: mid, firstIndex: firstIndex, secondIndex: secondIndex});
            } else {
                for(let j = secondIndex; j > firstIndex; j--) {
                    let temp = this.array[j];
                    this.array[j] = this.array[j-1];
                    this.array[j-1] = temp;
                }
                this.setState({array: this.array, leftBorder: leftBorder, rightBorder: rightBorder, mid: mid, firstIndex: firstIndex, secondIndex: secondIndex});
            }
        }
    }

    quickSortStep = () => {
        let x = this.swap.shift();
        if(x.newBorders === true) {
            this.setState({
                leftBorder: x.leftBorder,
                rightBorder: x.rightBorder,
                mid: x.mid
            })
        } else {
            let firstIndex = x.firstIndex;
            let secondIndex = x.secondIndex;
            if (x.swapped === false) {
                this.setState({
                    firstIndex: firstIndex,
                    secondIndex: secondIndex
                });
            } else {
                let temp = this.array[firstIndex];
                this.array[firstIndex] = this.array[secondIndex];
                this.array[secondIndex] = temp;
                this.setState({
                    array: this.array,
                    firstIndex: secondIndex,
                    secondIndex: firstIndex
                });
            }
        }
    }
}

export default Animation;