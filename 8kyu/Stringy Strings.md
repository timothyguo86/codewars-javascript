# [Stringy Strings](https://www.codewars.com/kata/563b74ddd19a3ad462000054)

write me a function `stringy` that takes a `size` and returns a `string` of alternating `1`s and `0`s.

the string should start with a `1`.

a string with `size` 6 should return :`'101010'`.

with `size` 4 should return : `'1010'`.

with `size` 12 should return : `'101010101010'`.

## The size will always be positive and will only use whole numbers.

---

<details><summary>My Solution</summary>

```js
function stringy(size) {
  return "".padStart(size, "10");
}
```

</details>
