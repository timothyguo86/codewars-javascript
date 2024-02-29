# [Debug Sum of Digits of a Number](https://www.codewars.com/kata/563d59dd8e47a5ed220000ba)

### Debug `getSumOfDigits` Function

Debug the `getSumOfDigits` function that takes a positive integer to calculate the sum of its digits. Assume that the argument is an integer.

#### Example

```
123  => 6
223  => 7
1337 => 14
```

---

<details><summary>My Solution</summary>

```js
function getSumOfDigits(integer) {
  let sum = 0
  let digits = integer.toString()
  for (let ix = 0; ix < digits.length; ix++) {
    sum = sum + +digits[ix]
  }
  return sum
}
```

</details>
