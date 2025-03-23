# [Calculate Two People's Individual Ages](https://www.codewars.com/kata/5668e3800636a6cd6a000018)

Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns
a pair of values (oldest age first) if those exist or `null/None` or `{-1, -1} in C` if:

- `sum < 0`
- `difference < 0`
- Either of the calculated ages come out to be negative

---

<details><summary>My Solution</summary>

```js
function getAges(sum, difference) {
  if (sum < 0 || difference < 0 || sum < difference) {
    return null
  }
  return [(sum + difference) / 2, (sum - difference) / 2]
}
```

</details>
