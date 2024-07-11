var unSortedArray = [32, 9, 13, 3, 43, 19, 26, 4, 1, 7, 15];

function selectionSort(inputArray) {
  for (i = 0; i < inputArray.length - 1; i++) {
    let lowestValue = inputArray[i];
    let lowestValueIndex = i;
    for (j = i; j < inputArray.length; j++) {
      if (inputArray[j] < lowestValue) {
        lowestValue = inputArray[j];
        lowestValueIndex = j;
      }
    }
    inputArray.splice(lowestValueIndex, 1);
    inputArray.splice(i, 0, lowestValue);
  }
  return inputArray;
}
console.log(selectionSort(unSortedArray));
