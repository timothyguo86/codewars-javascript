# [Filter unused digits](https://www.codewars.com/kata/55de6173a8fbe814ee000061)

Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

    [12, 34, 56, 78]  =>  "09"
    [2015, 8, 26]     =>  "3479"

**Note**: the digits in the resulting string should be sorted.

---

<details><summary>My Solution</summary>

```js
function unusedDigits(...args) {
  const usedDigitsSet = new Set(args.join('').split(''))
  const digits = Array.from({ length: 10 }, (_, i) => i.toString())

  return digits.filter(v => ![...usedDigitsSet].includes(v)).join('')
}
```

</details>
