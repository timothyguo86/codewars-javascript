# [Inspiring Strings](https://www.codewars.com/kata/5939ab6eed348a945f0007b2)

Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.

Examples
"red white blue" => "white"
"red blue gold" => "gold"

---

<details><summary>My Solution</summary>

```js
function longestWord(stringOfWords) {
  return stringOfWords.split(' ').reduce((longest, cur) => {
    if (longest.length <= cur.length) return cur
    return longest
  }, '')
}
```

</details>
