# [Sum ALL the arrays!](https://www.codewars.com/kata/5594463eaf1701909c0000d4)

You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.

---

<details><summary>My Solution</summary>

```js
function arraySum(arr) {
  return arr.reduce((total, cur) => {
    if (typeof cur === "number" && !isNaN(cur)) return total + cur;
    else if (Array.isArray(cur)) return total + arraySum(cur);
    return total;
  }, 0);
}
```

</details>
