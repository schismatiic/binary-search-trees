import { Node } from "./Node.js";

class Tree {
  constructor(arr = [], root = null) {
    this.arr = this.sortArray(arr);
    this.root = this.buildTree(this.arr);
  }
  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null || node === undefined) {
      return;
    }
    this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  };
  sortArray = (arr) => {
    const sortedArray = arr.sort((a, b) => {
      return a - b;
    });
    const removeDuplicate = sortedArray.filter(
      (element, index, arr) => element !== arr[index - 1],
    );
    return removeDuplicate;
  };
  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(arr[mid]);

    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);
    return root;
  }
  includes(value, tmp = this.root) {
    if (tmp.data === value) {
      return true;
    } else {
      if (
        (tmp.left === null && value < tmp.data) ||
        (tmp.right === null && value > tmp.data)
      ) {
        return false;
      }
      tmp = value < tmp.data ? tmp.left : tmp.right;
      return this.includes(value, tmp);
    }
  }
  insert(value, root = this.root) {
    if (root === null) return new Node(value);
    if (value === root.data) {
      return root;
    }
    if (value < root.data) root.left = this.insert(value, root.left);
    else root.right = this.insert(value, root.right);
    return root;
  }

  getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) curr = curr.left;
    return curr;
  }
  deleteItem(value, root = this.root) {
    if (root === null) return root;
    if (root.data > value) root.left = this.deleteItem(value, root.left);
    else if (root.data < value) root.right = this.deleteItem(value, root.right);
    else {
      // Node with 0 or 1 child
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      // Node with 2 children
      const succ = this.getSuccessor(root);
      root.data = succ.data;
      root.right = this.deleteItem(succ.data, root.right);
    }
    return root;
  }
}
export { Tree };
