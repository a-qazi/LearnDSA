const unSortedArray = [
  1, 0, 8, 11, 10, 3, 15, 9, 1, 0, 11, 13, 13, 3, 16, 20, 8, 4, 11, 19, 1, 6, 4,
  10, 17, 5, 8, 19, 0, 18, 0, 15, 14, 8, 17, 14, 2, 20, 17, 8, 17, 1, 19, 13, 9,
  4, 3, 13, 17,
];

function countingSort(inputArray) {
  let max_value = Math.max(...inputArray) + 1;

  const countArray = new Array(max_value).fill(0);

  while (inputArray.length > 0) {
    let element = inputArray.shift();
    countArray[element] = countArray[element] + 1;
  }
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      inputArray.push(i);
    }
  }
  console.log("Count Array: " + countArray);
  return inputArray;
}

console.log("Sorted Array: " + countingSort(unSortedArray));
