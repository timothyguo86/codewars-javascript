# [Character with longest consecutive repetition](https://www.codewars.com/kata/586d6cefbcc21eed7a001155)

For a given string `s` find the character `c` (or `C`) with longest consecutive repetition and return:

      [c, l]

where `l` (or `L`) is the length of the repetition. If there are two or more characters with the same `l` return the first in order of appearance.

For empty string return:

      ["", 0]

Happy coding! :)

---

<details><summary>My Solution</summary>

```js
function longestRepetition(s) {
  if (s === '') return ['', 0]

  const cArr = s.match(/(.)\1*/g)
  let maxC = ''
  let maxLength = 0

  cArr.forEach(v => {
    if (v.length > maxLength) {
      maxC = v[0]
      maxLength = v.length
    }
  })

  return [maxC, maxLength]
}
```

</details>
