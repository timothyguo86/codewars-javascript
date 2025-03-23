# [Dashatize it](https://www.codewars.com/kata/58223370aef9fc03fd000071)

Given an integer, return a string with dash `'-'` marks before and after each odd digit, but do not begin or end the
string with a dash mark.

Ex:

    274 -> '2-7-4'
    6815 -> '68-1-5'

---

<details><summary>My Solution</summary>

```js
function dashatize(num) {
  return num
    .toString()
    .replace(/[13579]/g, (v) => `-${v}-`)
    .replace(/--/g, "-")
    .replace(/^-|-$/g, "");
}
```

</details>
