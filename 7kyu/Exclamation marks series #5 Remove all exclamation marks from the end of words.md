# [Exclamation marks series #5: Remove all exclamation marks from the end of words](https://www.codewars.com/kata/57faf32df815ebd49e000117)

## Task

Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation
marks within a word.

### Examples

    remove("Hi!") === "Hi"
    remove("Hi!!!") === "Hi"
    remove("!Hi") === "!Hi"
    remove("!Hi!") === "!Hi"
    remove("Hi! Hi!") === "Hi Hi"
    remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

---

<details><summary>My Solution</summary>

```js
function remove(string) {
  return string
    .split(" ")
    .map((v) => v.replace(/[a-z]!+/g, (match) => match[0]))
    .join(" ");
}
```

</details>
