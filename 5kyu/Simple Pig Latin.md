# [Simple Pig Latin](https://www.codewars.com/kata/520b9d2ad5c005041100000f)

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

## Example

```js
pigIt('Pig latin is cool') // igPay atinlay siay oolcay
pigIt('Hello world !') // elloHay orldway !
```

---

<details><summary>My Solution</summary>

```js
function pigIt(str) {
  return str
    .split(' ')
    .map(word => {
      if (word.match(/[a-zA-Z]/g)) {
        return word.slice(1) + word[0] + 'ay'
      } else {
        return word
      }
    })
    .join(' ')
}
```

</details>
