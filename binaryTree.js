class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function preOrderTraversal(node) {
  if (node == null) {
    return;
  }

  console.log(node.data + ", ");
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

function inOrderTraversal(node) {
  if (node == null) {
    return;
  }
  inOrderTraversal(node.left);
  console.log(node.data + ", ");
  inOrderTraversal(node.right);
}

function postOrderTraversal(node) {
  if (node == null) {
    return;
  }
  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log(node.data + ", ");
}

let root = new TreeNode("R");
let nodeA = new TreeNode("A");
let nodeB = new TreeNode("B");
let nodeC = new TreeNode("C");
let nodeD = new TreeNode("D");
let nodeE = new TreeNode("E");
let nodeF = new TreeNode("F");
let nodeG = new TreeNode("G");

root.left = nodeA;
root.right = nodeB;

nodeA.left = nodeC;
nodeA.right = nodeD;

nodeB.left = nodeE;
nodeB.right = nodeF;

nodeF.left = nodeG;

console.log("Pre Order Traversal:");
preOrderTraversal(root);

console.log("In Order Traversal:");
inOrderTraversal(root);

console.log("Post Order Traversal:");
postOrderTraversal(root);
