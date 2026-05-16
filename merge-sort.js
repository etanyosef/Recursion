const mergeSort = (array) => {
    if (array.length <= 1) return array;

    const midOfArray = Math.floor(array.length / 2);
    let firstHalf = mergeSort(array.slice(0, midOfArray));
    let secondHalf = mergeSort(array.slice(midOfArray));

    let sortedArray = [];
    
    while (firstHalf.length && secondHalf.length) {
        if (firstHalf[0] < secondHalf[0]) {
            sortedArray.push(firstHalf.shift());
        }
    }
}