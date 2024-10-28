# [First non-repeating character](https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c)

Write a function named `first_non_repeating_letter`† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input `'stress'`, the function should return `'t'`, since the letter _t_ only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the **same character**, but the function should return the correct case for the initial letter. For example, the input `'sTreSS'` should return `'T'`.

If a string contains _all repeating characters_, it should return an empty string (`""`);

† Note: the function is called `firstNonRepeatingLetter` for historical reasons, but your function should handle any Unicode character.

---

<details><summary>My Solution</summary>

```js
function firstNonRepeatingLetter(s) {
  const lStr = s.toLowerCase()

  for (let i = 0; i < s.length; i++) {
    const char = lStr[i]
    if (lStr.indexOf(char) === lStr.lastIndexOf(char)) {
      return s[i]
    }
  }

  return ''
}
```

</details>
