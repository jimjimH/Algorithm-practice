const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const length = array.length;
    let complete = 0;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - complete; j++) {
            if (array[j] > array[j + 1]) {
                // Swap
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        complete++;
    }
}

bubbleSort(numbers);
console.log(numbers);