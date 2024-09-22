function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i; // hypothesis: assume min element equals i

    // this for loop will try to validate that assumtion
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }

    if (min_index !== i) {
      swap(arr, i, min_index);
    }
  }

  return arr;
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
console.log(selectionSort([10, 0, 97, -30, 5]));
