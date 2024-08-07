# [Find the capitals](https://www.codewars.com/kata/539ee3b6757843632d00026b)

# Instructions

Write a function that takes a single non-empty string of only lowercase and uppercase ASCII letters (`word`) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

# Example (Input --> Output)

```
"CodEWaRs" --> [0, 3, 4, 6]
```

---

<details><summary>My Solution</summary>

```js
const capitals = function (word) {
  const result = []

  word.split('').forEach((letter, i) => {
    if (letter.toUpperCase() === letter) result.push(i)
  })

  return result
}
```

</details>
