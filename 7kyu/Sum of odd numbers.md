# [Sum of odd numbers](https://www.codewars.com/kata/55fd2d567d94ac3bc9000064)

Given the triangle of consecutive odd numbers:

```
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: **(Input --> Output)**

```
1 --> 1
2 --> 3 + 5 = 8op.
```

---

<details><summary>My Solution</summary>

```js
function rowSumOddNumbers(n) {
  const firstNumber = n ** 2 - n + 1 // First number in the nth row
  const lastNumber = n ** 2 + n - 1 // Last number in the nth row

  // Sum of an arithmetic series: (n/2) * (firstNumber + lastNumber)
  return (n / 2) * (firstNumber + lastNumber) // => (n / 2) * (n ** 2 - n + 1 + n ** 2 + n - 1) => N **#
}
```

</details>
