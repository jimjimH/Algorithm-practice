class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            const holding = this.top;
            this.top = node;
            this.top.next = holding;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (!this.top.next) {
            this.bottom = null;
        }
        const top = this.top;
        this.top = top.next;
        this.length--;
        return top;

        // const top = this.top;
        // if (top.next) {
        //     this.top = top.next;
        // } else {
        //     this.top = null;
        //     this.bottom = null
        // }
        // this.length--;
        // return top;
    }
}

class Stack1 {
    constructor() {
        this.arr = [];
    }
    peek() {
        return this.arr[this.arr.length - 1];
    }
    push(value) {
        this.arr.push(value);
        return this;
    }
    pop() {
        return this.arr.pop()
    }
}

// Discord
// Udemy
// Google
const myStack = new Stack();
console.log(myStack.push('Google'));
console.log(myStack.push('Udemy'));
console.log(myStack.push('Discord'));
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.dir(myStack, { depth: null });

