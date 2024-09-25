/**
|--------------------------------------------------
|   arr = [5, 10, 97, 0, -30]
    We will loop through the array arr.length times.
      
      - for each iteration we loop again through the array
        arr.length -1 times each time we compare the
        current element with the element sitting next to it

     
|--------------------------------------------------
*/

const arr = [5, 10, 97, 0, -30];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

