function printNumbers(n) {
  let i = 1;
  while (i <= n) {
    console.log(n - (n - i));
    i++;
  }
}

printNumbers(5)

function printNumbersReverse(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}
