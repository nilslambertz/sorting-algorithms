let swap;
let array;

function quickSort(l, r) {
    if(l >= r) {
        return;
    }
    let newSwap = {
        newBorders: true,
        leftBorder: l,
        rightBorder: r,
        mid: Math.floor((r + l) / 2)
    }
    swap.push(newSwap);
    let j = partition(l, r);
    quickSort(l, j-1);
    quickSort(j+1, r);
}

function partition(l, r) {
    let x = array[r];
    let i = l;
    let j = r-1;
    while(i < j) {
        while(i < r && array[i] < x) {
            let mid = Math.floor((r + l) / 2);
            let a = {
                firstIndex: i,
                secondIndex: j,
                swapped: false
            }
            swap.push(a);
            i++;
        }
        while(j > l && array[j] >= x) {
            let mid = Math.floor((r + l) / 2);
            let a = {
                firstIndex: i,
                secondIndex: j,
                swapped: false
            }
            swap.push(a);
            j--;
        }
        if(i < j) {
            /*let a = {
                firstIndex: i,
                secondIndex: j,
                swapped: false,
                leftBorder: l,
                mid: mid,
                rightBorder: r
            }
            swap.push(a);*/
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            let mid = Math.floor((r + l) / 2);
            let a = {
                firstIndex: i,
                secondIndex: j,
                swapped: true
            }
            swap.push(a);
        }
    }
    if(array[i] > x) {
        let temp = array[i];
        array[i] = array[r];
        array[r] = temp;
        let mid = Math.floor((r + l) / 2);
        let a = {
            firstIndex: i,
            secondIndex: r,
            swapped: true
        }
        swap.push(a);
    }
    return i;
}

function getQuickSortSwap(arr) {
    swap = [];
    array = arr;
    quickSort(0, arr.length-1);
    return swap;
}

export { getQuickSortSwap };