# [Difference between years. (Level 1)](https://www.codewars.com/kata/588f5a38ec641b411200005b)

Write a function that receives two strings as parameter. This strings are in the following format of date: `YYYY/MM/DD`.
Your job is: Take the `years` and calculate the difference between them.

### Examples:

    '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18
    '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18

At this level, you don't need validate months and days to calculate the difference.

---

<details><summary>My Solution</summary>

```js
var howManyYears = function (date1, date2) {
  return Math.abs(date1.slice(0, 4) - date2.slice(0, 4));
};
```

</details>
