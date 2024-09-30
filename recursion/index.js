// write a function that print the first n consecutive integer
// recursively
// head recursion : the recursive call os the first statement
// function does nothing at calling time
// operation are done at returning time
function printNumbers(n) {
  if (n > 0) {
    printNumbers(n - 1);
    console.log(n);
  }
}

// use a recursive function to print n consecutive integer in reverse order
// tail recursin: the recursive call is the last statement
// operation are done at calling time
// at returning time function is just returning
function printNumberseReverse(n) {
  if (n > 0) {
    console.log(n);
    printNumberseReverse(n - 1);
  }
}

 