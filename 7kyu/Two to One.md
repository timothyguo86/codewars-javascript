# [Two to One](https://www.codewars.com/kata/5656b6906de340bd1b0000ac)

Take 2 strings s1 and s2 including only letters from `a` to `z`. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

### Examples:

```js
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```

---

<details><summary>My Solution</summary>

```js
function longest(s1, s2) {
  // Combine the unique characters from both strings, sort them, and join into a single string
  return [...new Set(s1 + s2)].sort().join('')
}
```

</details>
