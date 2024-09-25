function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    let j = i - 1;

    // looping through the sorted part of the array
    //to look for the correct index for the current element
    //we compare the current element with each element
    // of the sorted poriton of the array
    // if the current element is less than the element being compared
    // it shifts the that element one position to the right to make space
    // for current element to be inserted
    while (j >= 0 && arr[j] > currentElement) {
      array[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return arr;
}

const array = [4, 3, 2, 10, 12, 1, 5, 6];
console.log(insertionSort(array))
