// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        // const node = new Node(value);
        const node = {
            value,
            next: null
        };
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const node = {
            value,
            next: null
        };
        node.next = this.head;
        this.head = node;
        this.length++;
        return this.printList();
    }

    printList() {
        const array = [];
        let current = this.head;
        while (current !== null) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }

    traverseToIndex(index) {
        // check params
        if (index < 0) {
            throw Error('index should >= 0')
        }
        if (index >= this.length) {
            index = this.length - 1;
        }

        // let current = this.head;
        // for (let i = 0; i < index; i++) {
        //     current = current.next;
        // }

        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    insert(index, value) {
        // check params
        if (index < 0) {
            throw Error('index should >= 0')
        }
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            this.append(value);
        }

        const node = {
            value,
            next: null
        };
        let current = this.traverseToIndex(index - 1);
        const holding = current.next;
        current.next = node;
        node.next = holding;
        this.length++;
        return this.printList();
    }

    remove(index) {
        // check params
        if (index < 0) {
            throw Error('index should >= 0')
        }
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return this.printList();
        }
        if (index >= this.length) {
            index = this.length - 1;
        }

        const current = this.traverseToIndex(index - 1);
        const unwanted = current.next;
        current.next = unwanted.next;
        this.length--;
        return this.printList();
    }
}

// 1-->10-->99-->5-->16
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(0, 9);
myLinkedList.remove(0);

console.log(myLinkedList.printList())
console.dir(myLinkedList, { colors: true, depth: null });