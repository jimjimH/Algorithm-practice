numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]


def bubble_sort(numbers):
    complete = 0
    for i in range(len(numbers)):
        for j in range(len(numbers) - 1 - complete):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
        complete += 1
        # i loop每完成一次，未排序列表裡的最大值就已經在最右邊


bubble_sort((numbers))
print(numbers)
