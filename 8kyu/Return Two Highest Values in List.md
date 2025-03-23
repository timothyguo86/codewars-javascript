# [Return Two Highest Values in List](https://www.codewars.com/kata/57ab3c09bb994429df000a4a)

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values,
return as many of them, as possible.

The result should also be ordered from highest to lowest.

### Examples:

```
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
```

---

<details><summary>My Solution</summary>

```js
function twoHighest(arr) {
  const uniqueArr = [...new Set(arr)];

  return uniqueArr.sort((a, b) => b - a).slice(0, 2);
}
```

</details>
