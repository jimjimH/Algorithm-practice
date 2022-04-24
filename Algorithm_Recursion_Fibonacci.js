// 0, 1, 1, 2, 3, 5, 8, 13, 21...

// O(n)
function fibonacciIterative(n) {
    if (n <= 0) {
        return 0;
    }
    let x = 0;
    let y = 1;
    for (let i = 1; i < n; i++) {
        const next = x + y;
        x = y;
        y = next;
    }
    return y;
}
console.log(fibonacciIterative(-1));
console.log(fibonacciIterative(0));
console.log(fibonacciIterative(6));

// O(n)
function fibonacciIterative1(n) {
    if (n < 0) {
        return 0;
    }
    const arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}
console.log(fibonacciIterative1(-1));
console.log(fibonacciIterative1(0));
console.log(fibonacciIterative1(6));

// O(2^n)
function fibonacciRecursive(n) {
    if (n <= 0) {
        return 0;
    } else if (n < 2) {
        return n;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}
console.log(fibonacciRecursive(-1));
console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(6));
