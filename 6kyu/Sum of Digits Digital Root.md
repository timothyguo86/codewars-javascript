# [Sum of Digits / Digital Root](https://www.codewars.com/kata/541c8630095125aba6000c00)

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have
five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and
spaces. Spaces will be included only when more than one word is present.

Examples:

```
"Hey fellow warriors"  --> "Hey wollef sroirraw"
"This is a test        --> "This is a test"
"This is another test" --> "This is rehtona test"
```

---

<details><summary>My Solution</summary>

```js
function digitalRoot(n) {
  if (n < 10) return n
  let m = n
    .toString()
    .split('')
    .reduce((total, current) => (total = total + Number(current)), 0)

  return digitalRoot(m)
}
```

</details>
