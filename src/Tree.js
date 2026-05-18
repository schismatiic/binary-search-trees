import { Node } from "./Node.js";

class Tree {
  constructor(arr = [], root = null) {
    this.arr = this.sortArray(arr);
    this.root = this.buildTree(this.arr);
  }
  sortArray = (arr) => {
    const sortedArray = arr.sort((a, b) => {
      return a - b;
    });
    const removeDuplicate = sortedArray.filter(
      (element, index, arr) => element !== arr[index - 1],
    );
    return removeDuplicate;
  };
  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null || node === undefined) {
      return;
    }
    this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  };
  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(arr[mid]);

    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);
    return root;
  }
}
export { Tree };
