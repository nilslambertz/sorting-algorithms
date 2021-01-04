let swap;
let array;

function combSort() {
    let gap = array.length;
    let shrink = 1.3;
    let sorted = false;

    while(!sorted) {
        gap = Math.floor(gap / shrink);
        if(gap < 1) {
            gap = 1;
            sorted = true;
        }

        for (let i = 0; i + gap < array.length; i++) {
            let a = {
                firstIndex: i,
                secondIndex: i+gap,
                elementsSwapped: false
            }
            swap.push(a);
            if(array[i] > array[i+gap]) {
                let temp = array[i];
                array[i] = array[i+gap];
                array[i+gap] = temp;
                let a = {
                    firstIndex: i,
                    secondIndex: i+gap,
                    elementsSwapped: true
                }
                swap.push(a);
            }
        }
    }
}

function getCombSortSwap(arr) {
    swap = [];
    array = arr;
    combSort();
    return swap;
}

export { getCombSortSwap };