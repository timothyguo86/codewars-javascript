# [Changing letters](https://www.codewars.com/kata/5831c204a31721e2ae000294)

When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

---

<details><summary>My Solution</summary>

```js
function swap(string) {
  return string.replace(/[aeiou]/g, c => c.toUpperCase())
}
```

</details>
