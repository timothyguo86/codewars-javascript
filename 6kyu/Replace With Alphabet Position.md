# [Replace With Alphabet Position](https://www.codewars.com/kata/546f922b54af40e1e90001da)

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

`"a" = 1`, `"b" = 2`, etc.

### Example

```js
alphabetPosition("The sunset sets at twelve o' clock.")
```

Should return `"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"` ( as a string )

---

<details><summary>My Solution</summary>

```js
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .replace(/[^A-Z]/g, '') // Remove non-alphabetic characters and convert to uppercase
    .split('')
    .map(char => char.charCodeAt() - 64) // Map each character to its position in the alphabet
    .join(' ') // Join the array of positions into a space-separated string
}
```

</details>
