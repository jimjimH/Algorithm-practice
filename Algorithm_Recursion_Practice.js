//Implement a function that reverses a string using iteration...and then recursion!

//should return: 'yretsam oyoy'

function reverseStringIterative(str) {
    const result = [];
    const stringArr = str.split('');
    for (let i = 0; i < str.length; i++) {
        result.push(stringArr.pop());
    }
    return result.join('');
}
console.log(reverseStringIterative('yoyo mastery'));


function reverseStringRecursive(str) {
    const result = [];
    const stringArr = str.split('');
    function addLastWord(stringArr, result) {
        if (stringArr.length > 0) {
            result.push(stringArr.pop());
            addLastWord(stringArr, result);
        }
    }
    addLastWord(stringArr, result);
    return result.join('');
}
console.log(reverseStringRecursive('yoyo mastery'));


function reverseStringRecursive1(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursive1(str.substr(1)) + str.charAt(0);
    }
}