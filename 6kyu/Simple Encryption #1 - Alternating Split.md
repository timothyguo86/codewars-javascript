# [Simple Encryption #1 - Alternating Split](https://www.codewars.com/kata/57814d79a56c88e3e0000786)

Implement a pseudo-encryption algorithm which, given a string `S` and an integer `N`, concatenates all the odd-indexed characters of `S` with all the even-indexed characters of `S`. This process should be repeated `N` times.

Examples:

```
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
```

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

This kata is part of the Simple Encryption Series:

- [Simple Encryption #1 - Alternating Split](https://www.codewars.com/kata/simple-encryption-number-1-alternating-split)
- [Simple Encryption #2 - Index-Difference](https://www.codewars.com/kata/simple-encryption-number-2-index-difference)
- [Simple Encryption #3 - Turn The Bits Around](https://www.codewars.com/kata/simple-encryption-number-3-turn-the-bits-around)
- [Simple Encryption #4 - Qwerty](https://www.codewars.com/kata/simple-encryption-number-4-qwerty)

Have fun coding it and please don't forget to vote and rank this kata! :-)

<details><summary>My Solution</summary>

```js
function encrypt(text, n) {
  // Base case: If n is less than or equal to 0, or text is empty or null, return the original text
  if (n <= 0 || !text) return text

  for (let i = 0; i < n; i++) {
    let odd = ''
    let even = ''

    // Split the text into even and odd character strings
    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 0) {
        even += text[j]
      } else {
        odd += text[j]
      }
    }

    text = odd + even
  }

  return text
}

function decrypt(encryptedText, n) {
  // Base case: If n is less than or equal to 0, or the encrypted text is empty or null, return the original text
  if (n <= 0 || !encryptedText) return encryptedText

  // Split the encrypted text into two halves
  let firstHalf = encryptedText.slice(0, Math.floor(encryptedText.length / 2))
  let secondHalf = encryptedText.slice(Math.floor(encryptedText.length / 2))

  let text = ''

  // Interleave characters from both halves to form the decrypted text
  for (let i = 0; i < Math.max(firstHalf.length, secondHalf.length); i++) {
    if (secondHalf[i]) text += secondHalf[i]
    if (firstHalf[i]) text += firstHalf[i]
  }

  // Recursively decrypt the text for the remaining iterations
  return decrypt(text, n - 1)
}
```

</details>
