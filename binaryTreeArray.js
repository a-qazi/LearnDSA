const binaryTree = [
  "R",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  null,
  null,
  null,
  null,
  null,
  null,
  "G",
];

function leftChildIndex(index) {
  return 2 * index + 1;
}

function rightChildIndex(index) {
  return 2 * index + 2;
}

function preOrder(index) {
  if (index >= binaryTree.length || binaryTree[index] == null) {
    return [];
  }

  return [
    ...[binaryTree[index]],
    ...preOrder(leftChildIndex(index)),
    ...preOrder(rightChildIndex(index)),
  ];
}

function inOrder(index) {
  if (index >= binaryTree.length || binaryTree[index] == null) {
    return [];
  }

  return [
    ...inOrder(leftChildIndex(index)),
    ...[binaryTree[index]],
    ...inOrder(rightChildIndex(index)),
  ];
}

function postOrder(index) {
  if (index >= binaryTree.length || binaryTree[index] == null) {
    return [];
  }

  return [
    ...postOrder(leftChildIndex(index)),
    ...postOrder(rightChildIndex(index)),
    ...[binaryTree[index]],
  ];
}

console.log("Pre Order:" + preOrder(0));

console.log("In Order:" + inOrder(0));

console.log("Post Order:" + postOrder(0));
