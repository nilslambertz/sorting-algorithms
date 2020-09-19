let swap;
let array;

function mergeSort(l, r) {
    if (r - l === 0) {
        // nothing to do
    } else {
        if (r - l === 1) {
            let a = {
                inMergeSort: true,
                firstIndex: l,
                secondIndex: r,
                swapped: false
            }
            swap.push(a);
            if (array[l] > array[r]) {
                let temp = array[l];
                array[l] = array[r];
                array[r] = temp;
                a = {
                    inMergeSort: true,
                    firstIndex: l,
                    secondIndex: r,
                    swapped: true
                }
                swap.push(a);
            }
        } else {
            let i = Math.floor((r + l) / 2);
            let a = {
                inMergeSort: true,
                leftBorder: l,
                rightBorder: r,
                mid: i
            }
            swap.push(a);
            mergeSort(l, i-1);
            mergeSort(i, r);
            merge(l, r, i);
        }
    }
}

function merge(l, r, mid) {
    let j = mid;
    while (j <= r) {
        let a = {
            inMergeSort: false,
            firstIndex: j,
            secondIndex: j-1,
            leftBorder: l,
            rightBorder: r,
            mid: j+1,
            moved: false
        }
        swap.push(a);
        if (array[j] < array[j - 1]) {
            let firstBigger = l;
            for (let x = l; x < j; x++) {
                if (array[x] > array[j]) {
                    firstBigger = x;
                    break;
                }
            }
            for (let x = j; x > firstBigger; x--) {
                let temp = array[x];
                array[x] = array[x - 1];
                array[x - 1] = temp;
            }
            a = {
                inMergeSort: false,
                firstIndex: firstBigger,
                secondIndex: j,
                leftBorder: l,
                rightBorder: r,
                mid: j+1,
                moved: true
            }
            swap.push(a);
        }
        j++;
    }
}

function getMergeSortSwap(arr) {
    swap = [];
    array = arr;
    mergeSort(0, arr.length-1);
    return swap;
}

export { getMergeSortSwap };