# [CompoundArray](https://www.codewars.com/kata/56044de2aa75e28875000017)

You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

    Input - {1,2,3,4,5,6} and {9,8,7,6}
    Output - {1,9,2,8,3,7,4,6,5,6}

---

<details><summary>My Solution</summary>

```js
function compoundArray(a, b) {
  const output = []
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] !== undefined) output.push(a[i])
    if (b[i] !== undefined) output.push(b[i])
  }

  return output
}
```

</details>
