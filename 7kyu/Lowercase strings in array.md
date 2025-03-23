# [Lowercase strings in array](https://www.codewars.com/kata/5729fa716c7d26dc84000040)

Create a function to lowercase all **strings** in an array. Non-string items should remain unchanged.

### Example

    arrayLowerCase(['Red', 'Green']) == ['red', 'green']
    arrayLowerCase([1, 'Green']) == [1, 'green']


    ArrayLowerCase(new object[] { 'Red', 'Green' }); // => ['red', 'green']
    ArrayLowerCase(new object[] { 1, 'Green' }); // => [1, 'green']

---

<details><summary>My Solution</summary>

```js
function arrayLowerCase(arr) {
  return arr.map((v) => (typeof v === "string" ? v.toLowerCase() : v));
}
```

</details>
