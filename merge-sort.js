export const mergeSort = (array) => {
    if (array.length <= 1) return array;

    // split the array
    const midOfArray = Math.floor(array.length / 2);
    let firstHalf = mergeSort(array.slice(0, midOfArray));
    let secondHalf = mergeSort(array.slice(midOfArray));

    let sortedArray = [];
    
    while (firstHalf.length && secondHalf.length) {
        // split the array and compare, then push it to sortedArray
        if (firstHalf[0] < secondHalf[0]) {
            sortedArray.push(firstHalf.shift());
        } else {
            sortedArray.push(secondHalf.shift());
        }
    }

    return sortedArray.concat(firstHalf).concat(secondHalf);
}

console.log(mergeSort([]));

