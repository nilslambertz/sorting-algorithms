export const arrayIsSorted = (arr) => {
    for(let i = 0; i < arr.length -1; i++) {
        if(arr[i] > arr[i+1]) return false;
    }
    return true;
}

export const createNewArray = (elems, max) => {
    let allValues = [...Array(max).keys()];
    let array = [];
    for(let i = 0; i < elems; i++) {
        array[i] = allValues.splice(Math.floor(Math.random() * allValues.length), 1)[0] + 10;
    }
    return array;
}