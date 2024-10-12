# [Encrypt this!](https://www.codewars.com/kata/5848565e273af816fb000449)

## Acknowledgments:

I thank [yvonne-liu](https://www.codewars.com/users/yvonne-liu) for the idea and for the example tests :)

## Description:

Encrypt this!

You want to create secret messages which can be deciphered by the [Decipher this!](https://www.codewars.com/kata/decipher-this) kata. Here are the conditions:

1.  Your message is a string containing space separated words.
2.  You need to encrypt each word in the message using the following rules:
    - The first letter must be converted to its ASCII code.
    - The second letter must be switched with the last letter
3.  Keepin' it simple: There are no special characters in the input.

## Examples:

    encryptThis "Hello" == "72olle"
    encryptThis "good" == "103doo"
    encryptThis "hello world" == "104olle 119drlo"

---

<details><summary>My Solution</summary>

```js
let encryptThis = function (text) {
  return text
    .split(' ')
    .map(word => {
      const firstCharCode = word[0].charCodeAt(0)

      if (word.length === 1) return firstCharCode
      else if (word.length === 2) return firstCharCode + word[1]
      return firstCharCode + word.slice(-1) + word.slice(2, -1) + word.slice(1, 2)
    })
    .join(' ')
}
```
