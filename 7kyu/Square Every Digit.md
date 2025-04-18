# [Square Every Digit](https://www.codewars.com/kata/546e2562b03326a88e000020)

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run `9119` through the function, `811181` will come out, because 9<sup>2</sup> is `81` and 1<sup>
2</sup> is `1`. `(81-1-1-81)`

Example #2: An input of 765 will/should return 493625 because 7<sup>2</sup> is `49`, 6<sup>2</sup> is `36`, and 5 <sup>
2</sup> is `25`. `(49-36-25)`

### Note:

The function accepts an integer and returns an integer.

## Happy Coding!

<details><summary>My Solution</summary>

```js
function squareDigits(num) {
  // Convert the number to a string
  // Split it into an array of characters
  // Map over each digit, squaring it
  // Join the squared digits back into a string
  // Convert the resulting string to a number using the unary plus operator
  return +num
    .toString()
    .split("")
    .map((el) => el ** 2)
    .join("");
}
```

</details>
