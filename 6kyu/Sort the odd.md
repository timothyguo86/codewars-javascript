# [Sort the odd](https://www.codewars.com/kata/578aa45ee9fd15ff4600090d)

## Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even
numbers at their original positions.

### Examples

```
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
```

---

<details><summary>My Solution</summary>

```js
function sortArray(array) {
  const sortedOddNums = array
    .filter((num) => num % 2 !== 0)
    .sort((a, b) => a - b);

  let oddNumsIndex = 0;

  return array.map((num) => {
    if (num % 2 !== 0) {
      return sortedOddNums[oddNumsIndex++];
    }

    return num;
  });
}
```

</details>
