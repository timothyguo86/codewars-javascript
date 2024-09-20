# [Alphabetically ordered](https://www.codewars.com/kata/5a8059b1fd577709860000f6)

Your task is very simple. Just write a function that takes an input string of lowercase letters and returns `true`/`false` depending on whether the string is in alphabetical order or not.

### Examples (input -> output)

- "kata" -> false ('a' comes after 'k')
- "ant" -> true (all characters are in alphabetical order)

Good luck :)

Check my other katas:

[Find Nearest square number](https://www.codewars.com/kata/5a805d8cafa10f8b930005ba)

[Case-sensitive!](https://www.codewars.com/kata/5a805631ba1bb55b0c0000b8)

[Not prime numbers](https://www.codewars.com/kata/5a9a70cf5084d74ff90000f7)

[Find your caterer](https://www.codewars.com/kata/6402205dca1e64004b22b8de)

---

<details><summary>My Solution</summary>

```js
function alphabetic(s) {
  return s === s.split('').sort().join('')
}
```

</details>
