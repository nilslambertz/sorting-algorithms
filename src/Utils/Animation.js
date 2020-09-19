import { getBubbleSortSwap } from "../Algorithms/Bubblesort";
import { arrayIsSorted } from "./Functions";
import {getInsertionSortSwap} from "../Algorithms/InsertionSort";

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
            this.setState({firstIndex: null, secondIndex: null});
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
}

export default Animation;