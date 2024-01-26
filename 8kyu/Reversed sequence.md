# [Reversed sequence](https://www.codewars.com/kata/5a00e05cc374cb34d100000d)

Build a function that returns an array of integers from n to 1 where n>0.

Example : `n=5` --> `[5,4,3,2,1]`

---

<details><summary>My Solution</summary>

```js
const reverseSeq = n =>
  Array(n)
    .fill()
    .map((_, i) => n - i)
```

</details>
