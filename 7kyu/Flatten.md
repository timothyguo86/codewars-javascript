# [Flatten](https://www.codewars.com/kata/5250a89b1625e5decd000413)

Write a function that flattens an `Array` of `Array` objects into a flat `Array`. Your function must only do one level
of flattening.

    flatten([1,2,3]) // => [1,2,3]
    flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
    flatten([[[1,2,3]]]) // => [[1,2,3]]

---

<details><summary>My Solution</summary>

```js
const flatten = function (array) {
  return array.flat();
};
```

</details>
