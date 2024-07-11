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
    // Move i to the right until an element greater than or equal to the pivot is found
    while (inputArray[i] < pivot) {
      i++;
    }
    // Move j to the left until an element less than or equal to the pivot is found
    while (inputArray[j] > pivot) {
      j--;
    }
    // If i is less than or equal to j, swap elements at i and j and move indices
    if (i <= j) {
      swapArrayElement(inputArray, i, j);
      i++;
      j--;
    }
  }
  return i; // Return the partition point
}

function quickSort(inputArray, left, right) {
  if (left < right) {
    // Ensure there are at least two elements to sort
    let index = divideArray(inputArray, left, right);
    // Recursively sort elements before and after the partition point
    quickSort(inputArray, left, index - 1);
    quickSort(inputArray, index, right);
  }
  return inputArray;
}

// Example usage
let array = [
  1, 0, 8, 11, 10, 3, 15, 9, 1, 0, 11, 13, 13, 3, 16, 20, 8, 4, 11, 19, 1, 6, 4,
  10, 17, 5, 8, 19, 0, 18, 0, 15, 14, 8, 17, 14, 2, 20, 17, 8, 17, 1, 19, 13, 9,
  4, 3, 13, 17,
];
// console.log("Unsorted array:", array);
let sortedArray = quickSort(array, 0, array.length - 1);
console.log("Sorted array:", sortedArray);
