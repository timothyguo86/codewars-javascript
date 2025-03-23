# [Correct the mistakes of the character recognition software](https://www.codewars.com/kata/577bd026df78c19bca0002c0)

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and
stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares
often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

- `S` is misinterpreted as `5`
- `O` is misinterpreted as `0`
- `I` is misinterpreted as `1`
  The test cases contain numbers only by mistake.

---

<details><summary>My Solution</summary>

```js
// Corrects a string by replacing certain digits with corresponding letters.
// Replaces '5' with 'S', '0' with 'O', and '1' with 'I'.
function correct(string) {
  return string
    .replace(/5/g, 'S') // Replace all occurrences of '5' with 'S'
    .replace(/0/g, 'O') // Replace all occurrences of '0' with 'O'
    .replace(/1/g, 'I') // Replace all occurrences of '1' with 'I'
}
```

</details>
