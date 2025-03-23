# [Highest Rank Number in an Array](https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004)

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most
frequent number, return the largest number among them.

Note: no empty arrays will be given.

## Examples

    [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
    [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
    [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

---

<details><summary>My Solution</summary>

```js
function highestRank(arr) {
  const dict = {};
  let highestCount = 0;
  let highestNumb = arr[0];

  arr.forEach((v) => {
    if (dict[v]) {
      dict[v]++;
    } else {
      dict[v] = 1;
    }

    if (
      dict[v] > highestCount ||
      (dict[v] === highestCount && v > highestNumb)
    ) {
      highestCount = dict[v];
      highestNumb = v;
    }
  });

  return highestNumb;
}
```

</details>
