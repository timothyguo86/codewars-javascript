# [Multiplication table](https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08)

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given `size` is 3:

    1 2 3
    2 4 6
    3 6 9

For the given example, the return value should be:

    [[1,2,3],[2,4,6],[3,6,9]]


    [1 2 3; 2 4 6; 3 6 9]

---

<details><summary>My Solution</summary>

```js
const multiplicationTable = size => {
  const result = []
  for (let col = 1; col <= size; col++) {
    const row = []
    for (let i = 1; i <= size; i++) {
      row.push(i * col)
    }

    result.push(row)
  }
  return result
}
```

</details>
