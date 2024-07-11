var unSortedArray = [32, 9, 13, 3, 43, 19, 26, 4, 1, 7, 15];

function bubbleSort(inputArray) {
  let temp = 0;
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
      }
    }
  }
  return inputArray;
}

console.log(bubbleSort(unSortedArray));
