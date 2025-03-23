# [Find the position!](https://www.codewars.com/kata/5808e2006b65bff35500008f)

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

---

<details><summary>My Solution</summary>

```js
function position(letter) {
  const position = letter.charCodeAt(0) - "a".charCodeAt(0) + 1;

  return `Position of alphabet: ${position}`;
}
```

</details>
