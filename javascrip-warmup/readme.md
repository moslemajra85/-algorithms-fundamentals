# JavaScript Utility Functions

This project contains a set of basic utility functions written in JavaScript. Each function demonstrates fundamental programming concepts such as array manipulation and linear search. The functions are designed to be simple and reusable in various JavaScript projects.

## Functions

### 1. `arrayFromRange(min, max)`

This function generates an array containing all numbers between `min` and `max`, inclusive.

#### Example Usage:

```javascript
arrayFromRange(0, 5); // Output: [0, 1, 2, 3, 4, 5]
arrayFromRange(3, 7); // Output: [3, 4, 5, 6, 7]
arrayFromRange(7, 3); // Output: [] (since the range is invalid)
```

#### Explanation:

- The function uses a `for` loop to iterate from `min` to `max` and pushes each value into an array.
- If `min` is greater than `max`, the function returns an empty array.

### 2. `includes(array, searchElement)`

This is a custom implementation of the `Array.prototype.includes()` function. It checks whether a given `searchElement` exists in the array.

#### Example Usage:

```javascript
includes([1, 2, 3, 4], 2); // Output: true
includes([1, 2, 3, 4], 14); // Output: false
```

#### Explanation:

- The function uses a `for...of` loop to iterate through the array and checks if any element matches the `searchElement`.
- If a match is found, it returns `true`; otherwise, it returns `false`.

### 3. `except(array, excluded)`

This function returns a new array containing all elements of the original `array` except those specified in the `excluded` array.

#### Example Usage:

```javascript
except([1, 2, 3], [1]); // Output: [2, 3]
except([1, 2, 3, 4], [2]); // Output: [1, 3, 4]
```

#### Explanation:

- The function checks each element of the original array and pushes it into the result array if it is not in the `excluded` array.
- An alternate solution using the `filter` method is commented out in the code.

### 4. `move(array, index, offset)`

This function moves an element from the given `index` by a specified `offset` in the array. If the new position is invalid (out of bounds), an error message is displayed.

#### Example Usage:

```javascript
const numbers = [1, 2, 3];
move(numbers, 0, 1); // Output: [2, 1, 3]
move(numbers, 0, 2); // Output: [2, 3, 1]
move(numbers, 0, 3); // Output: Error: Invalid index
```

#### Explanation:

- The function calculates the new position based on the `offset`. If the new position is outside the bounds of the array, an error is displayed.
- It removes the element from its original position and inserts it into the new position.

## How to Use

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
```

2. Navigate to the project directory:

```bash
cd your-repository
```

3. You can use the JavaScript functions in any Node.js or browser environment. To test the functions, open the JavaScript file in a text editor or run it in a Node.js console.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
