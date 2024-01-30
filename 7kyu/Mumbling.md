# [Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039)

This time no story, no theory. The examples below show you how to write function `accum`:

### Examples:

```js
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```

The parameter of accum is a string which includes only letters from `a..z` and `A..Z`.

---

<details><summary>My Solution</summary>

```js
function accum(s) {
  return [...s]
    .map((element, index) => {
      // Create an array of strings with each character repeated and formatted based on its position
      return element.toUpperCase() + element.repeat(index).toLowerCase()
    })
    .join('-') // Join the array into a single string with '-' as a separator
}
```

</details>
