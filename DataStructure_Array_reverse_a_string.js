


function reverse(str) {
    if (typeof str !== 'string') {
        return Error('input is not string!')
    }
    let result = '';
    for (let i = str.length - 1; 0 <= i; i--) {
        result = result + str[i];
    }
    return result;
}

const reverse2 = str => [...str].reverse().join('');

str = 'Hi, My name is Jim';

console.log(reverse(str));
console.log(reverse(undefined));