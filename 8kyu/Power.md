# [Power](https://www.codewars.com/kata/562926c855ca9fdc4800005b)

The goal is to create a function of two inputs `number` and `power`, that "raises" the `number` up to `power` (ie
multiplies `number` by itself `power` times).

### Examples

```
numberToPower(3, 2) // -> 9 ( = 3 _ 3 )
numberToPower(2, 3) // -> 8 ( = 2 _ 2 \* 2 )
numberToPower(10, 6) // -> 1000000
```

**Note**: Math.pow and some other Math functions like eval() and \*\* are disabled.

---

<details><summary>My Solution</summary>

```js
function numberToPower(number, power) {
  let result = 1

  for (let i = 0; i < power; i++) {
    result *= number
  }

  return result
}
```

</details>
