
# Sorting Algorithms

This README provides a brief explanation of common sorting algorithms: Bubble Sort, Selection Sort, Insertion Sort, and Merge Sort. These algorithms are widely used in computer science to organize data efficiently.

## Table of Contents
- [Bubble Sort](#bubble-sort)
- [Selection Sort](#selection-sort)
- [Insertion Sort](#insertion-sort)
- [Merge Sort](#merge-sort)

---

## Bubble Sort

**Bubble Sort** is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

- **Time Complexity**: O(n²) in the worst and average cases
- **Space Complexity**: O(1)

### How it works:
1. Start at the beginning of the array.
2. Compare the first two elements.
3. Swap them if the first is greater than the second.
4. Move to the next pair and repeat the process for the entire array.
5. Repeat the steps for all elements until no swaps are needed.

```js
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
                let temp  = array[i];
                array[i] = array[j];
                array[j] = temp
            }
        }
    }
    return arr;
}
```

---

## Selection Sort

**Selection Sort** divides the array into a sorted and an unsorted part. It repeatedly selects the smallest element from the unsorted portion and swaps it with the first unsorted element.

- **Time Complexity**: O(n²) in all cases
- **Space Complexity**: O(1)

### How it works:
1. Start by selecting the first element as the minimum.
2. Compare the minimum with the rest of the elements in the array.
3. If a smaller element is found, update the minimum.
4. After completing the iteration, swap the minimum element with the first unsorted element.
5. Repeat the process for all unsorted elements.

```js
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap
    }
    return arr;
}
```

---

## Insertion Sort

**Insertion Sort** builds the sorted array one element at a time. It takes each element and inserts it into its correct position in the already sorted part of the array.

- **Time Complexity**: O(n²) in the worst and average cases, O(n) in the best case (when the array is already sorted)
- **Space Complexity**: O(1)

### How it works:
1. Consider the first element as sorted.
2. Take the next element and compare it with elements in the sorted portion.
3. Insert the element at its correct position.
4. Repeat this for each element in the array.

```js
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
```

---

## Merge Sort

**Merge Sort** is a divide-and-conquer algorithm that splits the array into two halves, recursively sorts each half, and then merges the sorted halves back together.

- **Time Complexity**: O(n log n) in all cases
- **Space Complexity**: O(n)

### How it works:
1. Split the array into two halves.
2. Recursively sort each half.
3. Merge the two sorted halves into a single sorted array.

```js
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], lIndex = 0, rIndex = 0;

    while (lIndex < left.length && rIndex < right.length) {
        if (left[lIndex] < right[rIndex]) {
            result.push(left[lIndex]);
            lIndex++;
        } else {
            result.push(right[rIndex]);
            rIndex++;
        }
    }

    return result.concat(left.slice(lIndex)).concat(right.slice(rIndex));
}
```

---

## Conclusion

Sorting algorithms play a vital role in data organization and optimization. Each algorithm has its strengths and weaknesses, so it's essential to choose the right one depending on the specific problem and data size. The above algorithms demonstrate how different approaches can be taken to sort a list of items.
