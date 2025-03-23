# [Exclamation marks series #1: Remove an exclamation mark from the end of string](https://www.codewars.com/kata/57fae964d80daa229d000126)

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a
string, no need to verify it.

### Examples

```
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
```

---

<details><summary>My Solution</summary>

```js
function remove(string) {
  return string.slice(-1) === "!" ? string.slice(0, -1) : string;
}
```

</details>
