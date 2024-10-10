# [From A to Z](https://www.codewars.com/kata/6512b3775bf8500baea77663)

Given a string indicating a range of letters, return a string which includes all the letters in that range, _including_ the last letter.  
Note that if the range is given in _capital letters_, return the string in capitals also!

### Examples

    "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
    "h-o" ➞ "hijklmno"
    "Q-Z" ➞ "QRSTUVWXYZ"
    "J-J" ➞ "J"

### Notes

- A _hyphen_ will separate the two letters in the string.
- You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).

---

<details><summary>My Solution</summary>

```js
function gimmeTheLetters(sp) {
  let startIndex = sp[0].charCodeAt(0)
  let endIndex = sp[2].charCodeAt(0)
  let output = ''

  for (let i = startIndex; i <= endIndex; i++) {
    output += String.fromCharCode(i)
  }

  return output
}
```

</details>
