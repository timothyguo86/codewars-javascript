# [Divide and Conquer](https://www.codewars.com/kata/57eaec5608fed543d6000021)

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the
total of the string integers.

Return as a number.

---

<details><summary>My Solution</summary>

```js
function divCon(x) {
  return x.reduce(
    (acc, cur) => acc + (typeof cur === "number" ? cur : -cur),
    0,
  );
}
```

</details>
