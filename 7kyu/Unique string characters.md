# [Unique string characters](https://www.codewars.com/kata/597c684822bc9388f600010f)

In this Kata, you will be given two strings `a` and `b` and your task will be to return the characters that are not
common in the two strings.

For example:

    solve("xyab","xzca") = "ybzc"
    --The first string has 'yb' which is not in the second string.
    --The second string has 'zc' which is not in the first string.

Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

Please also try [Simple remove duplicates](https://www.codewars.com/kata/5ba38ba180824a86850000f7)

---

<details><summary>My Solution</summary>

```js
function solve(a, b) {
  return [...(a + b)]
    .filter((el) => !a.includes(el) || !b.includes(el))
    .join("");
}
```

</details>
