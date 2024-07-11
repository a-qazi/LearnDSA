var unSortedArray = [32, 9, 3, 43, 19, 26, 4, 1, 7, 15, 13];

function swapArrayElement(inputArray, leftIndex, rightIndex) {
  let temp = inputArray[leftIndex];
  inputArray[leftIndex] = inputArray[rightIndex];
  inputArray[rightIndex] = temp;

  return inputArray;
}

function divideArray(inputArray, left, right) {
  let i = left;
  let j = right;
  let pivot = inputArray[Math.floor((i + j) / 2)];
  while (i <= j) {
    while (inputArray[i] < pivot) {
      i++;
    }
    while (inputArray[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swapArrayElement(inputArray, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(inputArray, left, right) {
  let index = 0;
  if (left < right) {
    index = divideArray(inputArray, left, right);
    if (left < index - 1) {
      quickSort(inputArray, left, index - 1);
    }
    if (index < right) {
      quickSort(inputArray, index, right);
    }
  }
  return inputArray;
}

console.log("Unsorted Array: " + unSortedArray);
console.log(
  "Sorted Array: " + quickSort(unSortedArray, 0, unSortedArray.length - 1)
);
