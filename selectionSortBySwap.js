var unSortedArray = [32, 9, 13, 3, 43, 19, 26, 4, 1, 7, 15];

function selectionSortBySwap(inputArray) {
  for (i = 0; i < inputArray.length - 1; i++) {
    for (j = i; j < inputArray.length; j++) {
      if (inputArray[j] < inputArray[i]) {
        let temp = inputArray[j];
        inputArray[j] = inputArray[i];
        inputArray[i] = temp;
      }
    }
  }
  return inputArray;
}
console.log(selectionSortBySwap(unSortedArray));
