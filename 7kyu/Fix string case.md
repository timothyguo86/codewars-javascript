# [Fix string case](https://www.codewars.com/kata/5b180e9fedaa564a7000009a)

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters, and your task is to
convert that string to either lowercase only or uppercase only based on:

- Make as few changes as possible.
- If the string contains an equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:

```haskell
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowercase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
```

More examples in test cases. Good luck!

---

<details><summary>My Solution</summary>

```js
function solve(s) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  s.split("").forEach((char) => {
    if (char === char.toUpperCase()) {
      uppercaseCount++;
    }
  });
  lowercaseCount = s.length - uppercaseCount;

  return uppercaseCount > lowercaseCount ? s.toUpperCase() : s.toLowerCase();
}
```

</details>
