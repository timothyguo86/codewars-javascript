# [SevenAte9](https://www.codewars.com/kata/559f44187fa851efad000087)

Write a function that removes every lone `9` that is inbetween `7`s.

    "79712312" --> "7712312"
    "79797" --> "777"

---

<details><summary>My Solution</summary>

```js
function sevenAte9(str) {
  return str.replace(/79(?=7)/g, '7');
}
```

</details>
