const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;
    // 把最小值換到i的位置
    for (let i = 0; i < length; i++) {
        let min_index = i;
        let min = array[i];
        for (let j = i + 1; j < length; j++) {
            if (array[j] < min) {
                min_index = j;
                min = array[j];
            }
        }
        array[min_index] = array[i];
        array[i] = min;
    }
}

selectionSort(numbers);
console.log(numbers);