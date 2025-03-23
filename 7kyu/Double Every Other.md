# [Double Every Other](https://www.codewars.com/kata/5809c661f15835266900010a)

Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

    [1,2,3,4]

the function should return :

    [1,4,3,8]

---

<details><summary>My Solution</summary>

```js
function doubleEveryOther(a) {
  return a.map((v, i) => {
    if (i % 2) return v * 2;
    else return v;
  });
}
```

</details>
