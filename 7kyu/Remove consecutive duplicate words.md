# [Remove consecutive duplicate words](https://www.codewars.com/kata/5b39e91ee7a2c103300018b3)

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

    --> "alpha beta gamma delta alpha beta gamma delta"

Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0
words) is a valid input.

---

<details><summary>My Solution</summary>

```js
function removeConsecutiveDuplicates(string) {
  return string
    .split(" ")
    .filter((el, i, arr) => el !== arr[i + 1])
    .join(" ");
}
```

</details>
