# [Remove the parentheses](https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8)

# Remove the parentheses

In this kata you are given a string for example:

    "example(unwanted thing)example"

Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

    "exampleexample"

## Notes

- Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like `"[]"` and `"{}"` as these will never appear.
- There can be multiple parentheses.
- The parentheses can be nested.

---

<details><summary>My Solution</summary>

```js
function removeParentheses(s) {
  let result = ''
  let openParentheses = 0

  for (let char of s) {
    if (char === '(') {
      openParentheses++
    } else if (char === ')') {
      if (openParentheses > 0) {
        openParentheses--
      } else {
        result += char
      }
    } else if (openParentheses === 0) {
      result += char
    }
  }

  return result
}
```

</details>
