# [String array duplicates](https://www.codewars.com/kata/59f08f89a5e129c543000069)

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

- `dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"]`.
- `dup(["kelless","keenness"]) = ["keles","kenes"]`.

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try:

[Alternate capitalization](https://www.codewars.com/kata/59cfc000aeb2844d16000075)

[Vowel consonant lexicon](https://www.codewars.com/kata/59cf8bed1a68b75ffb000026)

---

<details><summary>My Solution</summary>

```js
function dup(s) {
  return s.map(v => v.replace(/(.)\1*/gi, match => match[0]))
}
```

</details>
