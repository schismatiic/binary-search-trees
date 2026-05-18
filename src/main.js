import { Tree } from "./Tree.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
};

const arr = [1, 5, 9, 14, 23, 27];
const tree = new Tree(arr);
const root = tree.sortedArrayToBST(arr);

prettyPrint(root);
