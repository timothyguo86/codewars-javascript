# [Rot13](https://www.codewars.com/kata/530e15517bc88ac656000716)

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

---

<details><summary>My Solution</summary>

```js
function rot13(message) {
  // charCode for A-Z: 65-90, a-z: 97-122
  return message
    .split('')
    .map(char => {
      const charCode = char.charCodeAt()
      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(((charCode + 13 - 65) % 26) + 65)
      } else if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(((charCode + 13 - 97) % 26) + 97)
      } else {
        return char
      }
    })
    .join('')
}
```

</details>
