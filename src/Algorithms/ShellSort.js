let swap;
let array;

function shellSort() {
    let gaps = [701, 301, 132, 57, 23, 10, 4, 1]; // Marcin Ciura's gap sequence
    for(let gap of gaps) {
        for(let i = gap; i < array.length; i++) {
            let temp = array[i];
            let j;
            for(j = i; j >= gap && array[j - gap] > temp; j = j -gap) {
                array[j] = array[j - gap];
            }
            array[j] = temp;
            let a = {
                firstIndex: i,
                secondIndex: j,
                swapped: false
            }
            swap.push(a);
            a = {
                firstIndex: i,
                secondIndex: j,
                gap: gap,
                swapped: true
            }
            swap.push(a);
        }
    }
}

function getShellSortswap(arr) {
    swap = [];
    array = arr;
    shellSort();
    return swap;
}

export { getShellSortswap };