# [L2: Triple X](https://www.codewars.com/kata/568dc69683322417eb00002c)

Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

    "abraxxxas" → true
    "xoxotrololololololoxxx" → false
    "softX kitty, warm kitty, xxxxx" → true
    "softx kitty, warm kitty, xxxxx" → false

Note :

- capital X's do not count as an occurrence of "x".
- if there are no "x"'s then return false

---

<details><summary>My Solution</summary>

```js
function tripleX(str) {
  return str[str.indexOf("x") + 1] === "x";
}
```

</details>
