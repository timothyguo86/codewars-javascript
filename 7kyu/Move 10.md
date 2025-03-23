# [Move 10](https://www.codewars.com/kata/57cf50a7eca2603de0000090)

Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

---

<details><summary>My Solution</summary>

```js
function moveTen(s) {
  return s.replace(/[a-z]/g, (v) =>
    String.fromCharCode(((v.charCodeAt(0) - 97 + 10) % 26) + 97),
  );
}
```

</details>
