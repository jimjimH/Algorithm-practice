class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    // left
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if (value > current.value) {
                    // right
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right
                } else if (value === current.value) {
                    throw Error(`value ${value} already exists`)
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return current;
            } else if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let current = this.root;
        let parent = null;
        while (current) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else if (value === current.value) {
                // We have a match, get to work!

                if (current.right === null) {
                    // No right child:
                    if (parent === null) { // 表示root matches the target value
                        this.root = current.left; // 因為沒有right child，所以left child成為新的root
                    } else {
                        // 左補左、右補右
                        // if current < parent value, make current's left child a child of parent
                        if (current.value < parent.value) {
                            parent.left = current.left;
                        }
                        // if current > parent value, make current's right child a child of parent
                        if (current.value > parent.value) {
                            parent.right = current.left
                        }
                    }

                } else if (current.right.left === null) {
                    // Right child which doesn't have a left child
                    if (parent === null) {
                        // Udemy應該有寫錯，只寫了this.root = current.left
                        this.root = current.right;
                        current.right.left = current.left;
                    } else {
                        current.right.left = current.left;

                        if (current.value < parent.value) {
                            parent.left = current.right;
                        } else if (current.value > parent) {
                            parent.right = current.right;
                        }

                    }
                } else {
                    // Right child which has a left child

                    // find the Right child's left most child
                    let leftmostParent = current.right;
                    let leftmost = current.right.left;
                    while (leftmost.left) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // 處理小累贅ＸＤ
                    // leftmost's right subtree becomes the left subtree of leftmoseParent
                    leftmostParent.left = leftmost.right;

                    // 取代原本左右關係
                    leftmost.left = current.left;
                    leftmost.right = current.right;

                    // 最後處理上下關係
                    if (parent === null) {
                        this.root = leftmost; // 左右上下關係都處理好了，所以這裡不用做其他事
                    } else {
                        if (current.value < parent.value) {
                            parent.left = leftmost;
                        } else if (current.value > parent) {
                            parent.right = leftmost;
                        }
                    }
                }
                return this;
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(18);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(4))
tree.remove(9)
console.dir(tree, { depth: null });

//      9
//   4     20
// 1  6  15  170
//         18

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}