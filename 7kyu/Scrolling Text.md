# [Scrolling Text](https://www.codewars.com/kata/5a995c2aba1bb57f660001f)

Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, **in uppercase**.

## Example

`scrollingText("codewars")` should return:

    [ "CODEWARS",
      "ODEWARSC",
      "DEWARSCO",
      "EWARSCOD",
      "WARSCODE",
      "ARSCODEW"
      "RSCODEWA",
      "SCODEWAR" ]

Good luck!

---

<details><summary>My Solution</summary>

```js
function scrollingText(text) {
  let output = []
  for (let i = 0; i < text.length; i++) {
    output.push(text.toUpperCase().slice(i) + text.toUpperCase().slice(0, i))
  }
  return output
}
```

</details>
