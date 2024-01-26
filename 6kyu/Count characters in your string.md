# [Count characters in your string](https://www.codewars.com/kata/52efefcbcdf57161d4000091)

The main idea is to count all the occurring characters in a string. If you have a string like `aba`, then the result should be `{'a': 2, 'b': 1}`.

What if the string is empty? Then the result should be empty object literal, `{}`.

---

<details><summary>My Solution</summary>

```js
function count(string) {
  // 1. Create an empty object {}
  // 2. Use character as key, count as value

  // 3. Go trhough each character in the givin string, ++count if already exist or initialize it (count = 1)
  return [...string].reduce((a, b) => {
    a[b] ? a[b]++ : (a[b] = 1)

    return a
  }, {})
}
```

</details>
