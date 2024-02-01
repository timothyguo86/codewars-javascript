# [Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f)

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for `[1, 2, 2]` it should return `9` because 1<sup>2</sup> + 2<sup>2</sup> + 2<sup>2</sup> = 9.

---

<details><summary>My Solution</summary>

```js
function squareSum(numbers) {
  // Calculate the sum of squares using the reduce method
  return numbers.reduce((sum, n) => {
    return (sum += n ** 2)
  }, 0)
}
```

</details>
