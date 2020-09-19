import { getBubbleSortSwap, animateBubbleSort } from "../Algorithms/Bubblesort";
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

}

function startAnimation(setState, swap, array, algorithm, speed, interval) {
    speed = 505 - speed;
    switch (algorithm) {
        case 0: {
            if(swap.length === 0) {
                swap = getBubbleSortSwap(array);
            }
            setState({swap}, () => {
                animateBubbleSort(setState, array, swap, speed, interval);
            });
            break;
        }
        default: {
            alert("error");
            break;
        }
    }
}

function endAnimation(finished) {
   // clearInterval(interval);
    this.setState({animationRunning: false});
    if(finished) {
        this.setState({firstIndex: null, secondIndex: null});
        if(arrayIsSorted(this.state.array.slice(0))) {
            this.setState({sorted: true});
        }
    }
}

export default Animation;