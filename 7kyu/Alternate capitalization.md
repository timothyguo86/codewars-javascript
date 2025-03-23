# [Alternate capitalization](https://www.codewars.com/kata/59cfc000aeb2844d16000075)

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.
Index `0` will be considered even.

For example, `capitalize("abcdef") = ['AbCdEf', 'aBcDeF']`. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

- [Indexed capitalization](https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1)
- [Even-odd disparity](https://www.codewars.com/kata/59c62f1bdcc40560a2000060)

---

<details><summary>My Solution</summary>

```js
function capitalize(s) {
  const odd = s
    .split('')
    .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char))
    .join('')
  const even = s
    .split('')
    .map((char, i) => (i % 2 !== 0 ? char.toUpperCase() : char))
    .join('')
  return [odd, even]
}
```

</details>
