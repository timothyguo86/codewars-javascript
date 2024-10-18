# [Backspaces in string](https://www.codewars.com/kata/526571aae218b8ee490006f4)

Assume `"#"` is like a backspace in string. This means that string `"a#bc#d"` actually is `"bd"`

Your task is to process a string with `"#"` symbols.

## Examples

    "abc#d##c"      ==>  "ac"
    "abc##d######"  ==>  ""
    "#######"       ==>  ""
    ""              ==>  ""

---

<details><summary>My Solution</summary>

```js
function cleanString(s) {
  let result = []
  for (let i = 0; i < s.length; i++) {
    s[i] === '#' ? result.pop() : result.push(s[i])
  }

  return result.join('')
}
```

</details>
