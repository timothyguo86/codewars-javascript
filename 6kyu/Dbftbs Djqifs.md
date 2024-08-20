# [Dbftbs Djqifs](https://www.codewars.com/kata/546937989c0b6ab3c5000183)

Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

Read more about it here: [https://en.wikipedia.org/wiki/Caesar_cipher](https://en.wikipedia.org/wiki/Caesar_cipher)

## Your task

Your task is to create a function `encryptor` that takes 2 arguments - key and message - and returns the encrypted message.

Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

## Examples

A message `'Caesar Cipher'` and a key of `1` returns `'Dbftbs Djqifs'`.

A message `'Caesar Cipher'` and a key of `-1` returns `'Bzdrzq Bhogdq'`.

---

<details><summary>My Solution</summary>

```js
function encryptor(key, message) {
  const charCodeA = 'A'.charCodeAt(0)
  const charCodeZ = 'Z'.charCodeAt(0)
  const charCodea = 'a'.charCodeAt(0)
  const charCodez = 'z'.charCodeAt(0)
  const newKey = key % 26

  return message
    .split('')
    .map(char => {
      if (/[a-zA-Z]/.test(char)) {
        const charCode = char.charCodeAt(0)
        const newCharCode = charCode + newKey

        // Check if the character is uppercase or lowercase
        if (charCodeA <= charCode && charCode <= charCodeZ) {
          if (newCharCode < charCodeA) return String.fromCharCode(newCharCode + 26)
          if (newCharCode > charCodeZ) return String.fromCharCode(newCharCode - 26)
          return String.fromCharCode(newCharCode)
        } else {
          if (newCharCode < charCodea) return String.fromCharCode(newCharCode + 26)
          if (newCharCode > charCodez) return String.fromCharCode(newCharCode - 26)
          return String.fromCharCode(newCharCode)
        }
      } else {
        return char
      }
    })
    .join('')
}
```

</details>
