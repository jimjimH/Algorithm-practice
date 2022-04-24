// 5! = 5 * 4 * 3 * 2 * 1

function findFactorialRecursive(number) {
    if (number <= 2) {
        return number;
    } else {
        return number * findFactorialRecursive(number - 1);
    }
}
console.log(findFactorialRecursive(5))

function findFactorialIterative(number) {
    let answer = 1;
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}
console.log(findFactorialIterative(5))