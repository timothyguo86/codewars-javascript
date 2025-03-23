# [Sorted? yes? no? how?](https://www.codewars.com/kata/562d8d4c434582007300004e)

Complete the method which accepts an array of integers, and returns one of the following:

- `"yes, ascending"` - if the numbers in the array are sorted in an ascending order
- `"yes, descending"` - if the numbers in the array are sorted in a descending order
- `"no"` - otherwise

You can assume the array will always be valid, and there will always be one correct answer.

---

<details><summary>My Solution</summary>

```js
function isSortedAndHow(array) {
  let ascending = true;
  let descending = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) ascending = false;
    if (array[i] > array[i - 1]) descending = false;
    if (!ascending && !descending) return "no";
  }

  return ascending ? "yes, ascending" : "yes, descending";
}
```

</details>
