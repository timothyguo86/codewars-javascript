# [Maximum Length Difference](https://www.codewars.com/kata/5663f5305102699bad000056)

You are given two arrays `a1` and `a2` of strings. Each string is composed with letters from `a` to `z`. Let `x` be any
string in the first array and `y` be any string in the second array.

`Find max(abs(length(x) − length(y)))`

If `a1` and/or `a2` are empty return `-1` in each language except in Haskell (F#) where you will return `Nothing` (
None).

#### Example:

    a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
    a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
    mxdiflg(a1, a2) --> 13

#### Bash note:

- input : 2 strings with substrings separated by `,`
- output: number as a string

---

<details><summary>My Solution</summary>

```js
const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) return -1

  const l1 = a1.map(s => s.length)
  const l2 = a2.map(s => s.length)

  const maxA1 = Math.max(...l1)
  const maxA2 = Math.max(...l2)
  const minA1 = Math.min(...l1)
  const minA2 = Math.min(...l2)

  return Math.max(maxA1 - minA2, maxA2 - minA1)
}
```

</details>
