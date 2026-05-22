import { Tree } from "./Tree.js";

const arr = [1, 5, 9, 14, 23, 27];
const tree = new Tree(arr);
tree.prettyPrint(tree.root);
console.log(tree.rebalance());
