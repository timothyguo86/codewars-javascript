# [Abbreviate a Two Word Name](https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3)

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

`Sam Harris` => `S.H`

`patrick feeney` => `P.F`

---

<details><summary>My Solution</summary>

```js
function abbrevName(name) {
  // Convert the input name to uppercase, split it into an array, and return the abbreviated form
  let nameArray = name.toUpperCase().split(' ')
  return `${nameArray[0].charAt(0)}.${nameArray[1].charAt(0)}`
}
```

</details>
