# [Reverse every other word in the string](https://www.codewars.com/kata/58d76854024c72c3e20000de)

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while
ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the
word in this kata.

---

<details><summary>My Solution</summary>

```js
function reverse(str) {
  return str
    .split(" ")
    .map((w, i) => {
      if (i % 2) return w.split("").reverse().join("");
      else return w;
    })
    .join(" ")
    .trim();
}
```

</details>
