# [Vowel Count](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

Return the number (count) of vowels in the given string.

We will consider `a`, `e`, `i`, `o`, `u` as vowels for this Kata (but not `y`).

The input string will only consist of lower case letters and/or spaces.

---

<details><summary>My Solution</summary>

```js
function getCount(str) {
  // Count the number of vowels (aeiou) in the input string
  return str.match(/[aeiou]/g) ? str.match(/[aeiou]/g).length : 0;
}
```

</details>
