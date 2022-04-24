let counter = 0

function inception() {
    console.log(counter)
    if (counter > 3) {
        return 'done!';
    }
    counter++;
    return inception();
}

console.log(inception())

// 1. Identify the base case/ stop point
// 2. Identify recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns, one for base case, another for recursive case