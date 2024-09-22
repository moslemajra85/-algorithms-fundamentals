/**
|--------------------------------------------------
| 
    write a function that take two parameters
    min and max and return an array containing
    all the element between min and max
        
    example:  
    arrayFromRange(0, 5) --> [0, 1, 2, 3, 4, 5]
    arrayFromRange(3, 7) --> [3, 4, 5, 6, 7]
    arrayFromRange(7, 3) --> []
|--------------------------------------------------
*/

function arrayFromRange(min, max) {
  const arr = [];

  for (let i = min; i <= max; i++) {
    arr.push(i);
  }

  return arr;
}

/**
|--------------------------------------------------
| in javascript we have a arrays has a function
  called includes that check the existence of
  an element inside the array:

  example: numbers = [1, 2, 3, 4, 5];

  numbers.includes(1) --> true
  numbers.includes(4) --> true
  numbers.includes(7) --> false

  write your own version of the function includes:
  function includes(array, searchElement) 
  if array contains search element it will return true
  otherwise it will return false

  includes([1, 2, 3, 4], 2) --> true
  includes([1, 2, 3, 4], 14) --> false
|--------------------------------------------------
*/

// linear Search
function includes(array, searchElement) {
  // element included in the array?
  for (let element of array) {
    if (element === searchElement) return true;
  }

  return false;
}

/**
|--------------------------------------------------
| write a function called except that takes to 
  paremeters an array and the elments to be excluded
  from the array. it will return a new array without
  the excluded elements
  Example:
    except([1, 2, 3], [1]) --> [2, 3]
    except([1, 2, 3, 4], [2]) --> [1, 3, 4]
|--------------------------------------------------
*/

function except(array, excluded) {
  // solution 1 using classical apprach

  const filtered = [];

  for (let i = 0; i < array.length; i++) {
    if (!excluded.includes(array[i])) {
      filtered.push(array[i]);
    }
  }
  return filtered;

  //   // solution 2 using array methods
  //   //return array.filter((element) => !excluded.includes(element) )
}


/**
|--------------------------------------------------
| write a function called move that takes 3 parameters
  move(array, index, offset) that works as follow:

  const numbers = [1, 2, 3];
  move(numbers, 0, 1) --> [2, 1, 3]
  move(numbers, 0, 2) --> [2, 3, 1]
  move(numbers, 0, 3) --> display an error: invalid index
|--------------------------------------------------
*/

function move(numbers, index, offset) {
  const position = index + offset;

  if (position >= numbers.length || position < 0) {
    console.error('Invalid');
    return;
  }

  //remove that target element from the original position
  // place it back into the new position

  const deleted = output.splice(index, 1)[0];

  output.splice(index + offset, 0, Element);

  return output;
}

 