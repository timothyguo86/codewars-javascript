# [Consonant value](https://www.codewars.com/kata/59c633e7dcc4053512000073)

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant
substrings. Consonants are any letters of the alphabet except `"aeiou"`.

We shall assign the following values: `a = 1, b = 2, c = 3, .... z = 26`.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z **o** d **ia** cs"

    -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
    solve("zodiacs") = 26

    For the word "strength", solve("strength") = 57
    -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

For C: do not mutate input.

More examples in test cases. Good luck!

If you like this Kata, please try:

[Word values](https://www.codewars.com/kata/598d91785d4ce3ec4f000018)

[Vowel-consonant lexicon](https://www.codewars.com/kata/59cf8bed1a68b75ffb000026)

---

<details><summary>My Solution</summary>

```js
function solve(s) {
  let alphabetics = [
    '',
    '',
    'b',
    'c',
    'd',
    '',
    'f',
    'g',
    'h',
    '',
    'j',
    'k',
    'l',
    'm',
    'n',
    '',
    'p',
    'q',
    'r',
    's',
    't',
    '',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  return s.split(/[aeiou]/).reduce((maxValue, cur) => {
    let curValue = 0
    for (let i = 0; i < cur.length; i++) {
      curValue += alphabetics.indexOf(cur[i])
    }
    return Math.max(maxValue, curValue)
  }, 0)
}
```

</details>

