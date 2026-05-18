import { Node } from "./Node.js";

class Tree {
  constructor(arr = [], root = null) {
    this.arr = arr;
    this.root = root;
  }
  buildTree(arr, start, end) {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(arr[mid]);

    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);
    return root;
  }
  sortedArrayToBST(arr) {
    return this.buildTree(arr, 0, arr.length - 1);
  }
}
export { Tree };
