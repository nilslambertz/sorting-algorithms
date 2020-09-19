import { getBubbleSortSwap } from "../Algorithms/Bubblesort";
import { arrayIsSorted } from "./Functions";

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
                this.animateBubbleSort();
                break;
            }
            default: {
                alert("error");
                break;
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

    animateBubbleSort() {
        this.interval = setInterval(() => {
            if(this.swap.length === 0) {
                this.endAnimation(true);
                return;
            }
            let x = this.swap.shift();
            let first = x.firstIndex;

            if(x.elementsSwapped === true) {
                let temp = this.array[first];
                this.array[first] = this.array[first+1];
                this.array[first+1] = temp;
                this.setState({array: this.array, firstIndex: first+1, secondIndex: first});
            } else {
                this.setState({firstIndex: first, secondIndex: first+1});
            }
        }, this.speed);
    }
}

export default Animation;