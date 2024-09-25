const array = [4, 8, 10, 15, 18, 21, 24, 27, 29, 33, 34, 37, 39, 41, 43];

function binarySearch(arr, key) {
  let h = arr.length - 1;
  let l = 0;

  while (l <= h) {
    let mid = Math.floor(h + l / 2);

    if (key === arr[mid]) return mid;

    if (key > arr[mid]) {
      l = mid + 1;
    } else if (key < arr[mid]) {
      h = mid - 1;
    }
  }

  return -1;
}

const result = binarySearch(
  [4, 8, 10, 15, 18, 21, 24, 27, 29, 33, 34, 37, 41, 43],
  18
);

console.log(result);
