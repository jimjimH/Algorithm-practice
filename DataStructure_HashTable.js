class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        const same_key_index = this.data[address].findIndex(e => e[0] === key);
        if (same_key_index >= 0) {
            this.data[address][same_key_index][1] = value;
        } else {
            this.data[address].push([key, value]);
        }
        console.log(this.data);
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        if (!this.data.length) {
            return undefined;
        }
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0])
                    }
                } else {
                    keysArray.push(this.data[i][0])
                }
            }
        }
        return keysArray;
    }
}


const myHashTable = new HashTable(3);
myHashTable.set('grapes', 10000);
myHashTable.set('grapes', 100001);
myHashTable.set('apples', 54);
myHashTable.set('organges', 2);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));
console.log(myHashTable.get('apples1'));
console.log(myHashTable.keys())