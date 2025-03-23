# [Are they square?](https://www.codewars.com/kata/56853c44b295170b73000007)

Write a function that checks whether all elements in an array are square numbers. The function should be able to take
any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return `undefined` / `None` / `nil` /`false` (for C). You can assume that all array elements will
be positive integers.

Examples:

    isSquare([1, 4, 9, 16]) --> true

    isSquare([3, 4, 7, 9]) --> false

    isSquare([]) --> undefined


    is_square([1, 4, 9, 16]) --> True

    is_square([3, 4, 7, 9]) --> False

    is_square([]) --> None

---

<details><summary>My Solution</summary>

```js
var isSquare = function (arr) {
  return arr.length ? arr.every(v => Number.isInteger(Math.sqrt(v))) : undefined
}
```

</details>
