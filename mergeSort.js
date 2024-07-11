var unSortedArray = [32, 9, 3, 43, 19, 26, 4, 13, 1, 7, 15];

function mergeSort(inputArray) {
  if (inputArray.length <= 1) {
    return inputArray;
  }
  let midPoint = Math.ceil(inputArray.length / 2);
  const leftArray = mergeSort(inputArray.slice(0, midPoint));
  const rightArray = mergeSort(inputArray.slice(midPoint, inputArray.length));
  return mergeArray(leftArray, rightArray);
}

function mergeArray(leftArray, rightArray) {
  const mergedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      mergedArray.push(leftArray.shift());
    } else {
      mergedArray.push(rightArray.shift());
    }
  }
  return [...mergedArray, ...leftArray, ...rightArray];
}

console.log("Sorted Array: ", mergeSort(unSortedArray));
