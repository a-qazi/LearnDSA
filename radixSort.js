const unSortedArray = [68, 495, 2, 160, 6, 112, 267, 80, 358, 61, 152, 27];

function countingSort(inputArray, div) {
  const countArray = new Array(10).fill(0);
  const outputArray = new Array(inputArray.length).fill("*");

  for (let n = 0; n < inputArray.length; n++) {
    countArray[Math.floor((inputArray[n] / div) % 10)]++;
  }

  for (let x = 1; x < 10; x++) {
    countArray[x] = countArray[x] + countArray[x - 1];
  }
  for (i = inputArray.length - 1; i >= 0; i--) {
    let index = countArray[Math.floor((inputArray[i] / div) % 10)] - 1;
    outputArray[index] = inputArray[i];
    countArray[Math.floor((inputArray[i] / div) % 10)]--;
  }
  for (let j = 0; j < outputArray.length; j++) {
    inputArray[j] = outputArray[j];
  }

  return inputArray;
}

function radixSort(inputArray) {
  let max_value = Math.max(...inputArray) + 1;
  for (let lsd = 1; Math.floor(max_value / lsd) > 0; lsd *= 10) {
    countingSort(inputArray, lsd);
  }
  return inputArray;
}

console.log("Sorted Array: " + radixSort(unSortedArray));
