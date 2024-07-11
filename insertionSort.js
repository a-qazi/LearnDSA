// var unSortedArray = [32, 9, 13, 3, 43, 19, 26, 4, 1, 7, 15];
var unSortedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function insertionSort(inputArray) {
  for (i = 1; i < inputArray.length; i++) {
    for (j = 0; j < i; j++) {
      if (inputArray[i] < inputArray[j]) {
        let temp = inputArray[j];
        inputArray[j] = inputArray[i];
        inputArray[i] = temp;
      }
    }
  }
  return inputArray;
}
console.log(insertionSort(unSortedArray));
