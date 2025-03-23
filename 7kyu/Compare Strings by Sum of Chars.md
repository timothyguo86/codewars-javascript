# [Compare Strings by Sum of Chars](https://www.codewars.com/kata/576bb3c4b1abc497ec000065)

Compare two strings by comparing the sum of their values (ASCII character code).

- For comparing treat all letters as UpperCase
- `null/NULL/Nil/None` should be treated as empty strings
- If the string contains other characters than letters, treat the whole string as it would be empty

Your method should return `true`, if the strings are equal and `false` if they are not equal.

## Examples:

    "AD", "BC"  -> equal
    "AD", "DD"  -> not equal
    "gf", "FG"  -> equal
    "zz1", ""   -> equal (both are considered empty)
    "ZzZz", "ffPFF" -> equal
    "kl", "lz"  -> not equal
    null, ""    -> equal

---

<details><summary>My Solution</summary>

```js
function compare(s1, s2) {
  let filteredS1 =
    s1 === null ? "" : s1.toUpperCase().replace(/[^a-zA-Z]/g, "");
  let filteredS2 =
    s2 === null ? "" : s2.toUpperCase().replace(/[^a-zA-Z]/g, "");

  let s1Total =
    filteredS1 === "" || s1.length !== filteredS1.length
      ? 0
      : filteredS1.split("").reduce((acc, cur) => {
          return acc + cur.charCodeAt(0);
        }, 0);

  let s2Total =
    filteredS2 === "" || s2.length !== filteredS2.length
      ? 0
      : filteredS2.split("").reduce((acc, cur) => {
          return acc + cur.charCodeAt(0);
        }, 0);

  return s1Total === s2Total;
}
```

</details>
