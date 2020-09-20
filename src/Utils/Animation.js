import { getBubbleSortSwap } from "../Algorithms/BubbleSort";
import { arrayIsSorted } from "./Functions";
import {getInsertionSortSwap} from "../Algorithms/InsertionSort";
import {getMergeSortSwap} from "../Algorithms/MergeSort";
import {getQuickSortSwap} from "../Algorithms/QuickSort";
import {getCocktailShakerSortSwap} from "../Algorithms/CoktailShakerSort";
import {getShellSortswap} from "../Algorithms/ShellSort";
import {swap} from "./Functions";

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
            case 4: {
                if(this.swap.length === 0) {
                    this.swap = getCocktailShakerSortSwap(this.array.slice(0));
                }
                this.animate(this.cocktailshakerSortStep);
                return true;
            }
            case 5: {
                if(this.swap.length === 0) {
                    this.swap = getShellSortswap(this.array.slice(0));
                }
                this.animate(this.shellSortStep);
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
        let firstIndex = x.firstIndex;

        if(x.elementsSwapped === true) {
            swap(this.array, firstIndex, firstIndex+1);
            this.setState({array: this.array, firstIndex: firstIndex, secondIndex: firstIndex+1});
        } else {
            this.setState({firstIndex: firstIndex+1, secondIndex: firstIndex});
        }
    }

    cocktailshakerSortStep = () => {
        let x = this.swap.shift();
        let firstIndex = x.firstIndex;

        if(x.swapped === true) {
            swap(this.array, firstIndex, firstIndex+1);
            this.setState({array: this.array, firstIndex: firstIndex, secondIndex: firstIndex+1});
        } else {
            this.setState({array: this.array, firstIndex: firstIndex+1, secondIndex: firstIndex});
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
                    swap(this.array, firstIndex, secondIndex);
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
                    swap(this.array, j, j-1);
                }
                this.setState({array: this.array, leftBorder: leftBorder, rightBorder: rightBorder, mid: mid, firstIndex: firstIndex, secondIndex: secondIndex});
            }
        }
    }

    shellSortStep = () => {
        let x = this.swap.shift();
        let firstIndex = x.firstIndex;
        let secondIndex = x.secondIndex;
        if(x.swapped === true) {
            let gap = x.gap;
            let temp = this.array[firstIndex];
            let j;
            for(j = firstIndex; j > secondIndex; j = j - gap) {
                this.array[j] = this.array[j - gap];
            }
            this.array[j] = temp;
            this.setState({firstIndex: secondIndex, secondIndex: firstIndex});
        } else {
            this.setState({firstIndex: firstIndex, secondIndex: secondIndex});
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
                swap(this.array, firstIndex, secondIndex);
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