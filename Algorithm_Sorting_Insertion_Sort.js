const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// 1, 2, 6, 99, 44, 5
function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = i; j > 0; j--) {
            // 持續交換到合適的位置
            if (array[j - 1] > array[j]) {
                const temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
}

function insertionSort1(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        // move number to the first position
        if (array[0] > array[i]) {
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // find where number should go
            for (let j = 1; j < i; j++) {
                if (array[j - 1] < array[i] && array[i] < array[j]) {
                    // move number to the right position
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);