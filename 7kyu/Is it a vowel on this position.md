# [Is it a vowel on this position?](https://www.codewars.com/kata/5a2b7edcb6486a856e00005b)

Check if it is a vowel(a, e, i, o, u,) on the `n` position in a string (the first argument). Don't forget about
uppercase.

A few cases:

    {
    checkVowel('cat', 1)  ->   true // 'a' is a vowel
    checkVowel('cat', 0)  ->   false // 'c' is not a vowel
    checkVowel('cat', 4)  ->   false // this position doesn't exist
    }

P.S. If n < 0, return false

---

<details><summary>My Solution</summary>

```js
const checkVowel = (string, position) => {
  if (position < 0 || position >= string.length) return false

  return /[aeiou]/i.test(string[position])
}
```

</details>
