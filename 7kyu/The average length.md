# [The average length](https://www.codewars.com/kata/5a430359e1ce0e35540000b1)

Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each
element is equal to the average length of the elements of the previous array.

A few examples:

    ['u', 'y'] =>  ['u', 'y'] // average length is 1
    ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
    ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

- If the average length is not an integer, use Math.round().
- The input array's length > 1

---

<details><summary>My Solution</summary>

```js
function averageLength(arr) {
  const length = Math.round(arr.join('').length / arr.length)
  return arr.map(v => v[0].repeat(length))
}
```

</details>
