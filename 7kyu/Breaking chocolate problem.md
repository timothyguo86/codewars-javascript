# [Breaking chocolate problem](https://www.codewars.com/kata/534ea96ebb17181947000ada)

# Description

Your task is to split the chocolate bar of given dimension `n` x `m` into small squares. Each square is of size 1x1 and
unbreakable. Implement a function that will return the minimum number of breaks needed.

For example, if you are given a chocolate bar of size `2` x `1`, you can split it into single squares in just one break,
but for size `3` x `1`, you must do two breaks.

If input data is invalid, you should return 0 (as in no breaks are needed if we do not have any chocolate to split).
Input will always be a non-negative integer.

---

<details><summary>My Solution</summary>

```js
function breakChocolate(n, m) {
  if ((m !== 0) & (n !== 0)) {
    return m * n - 1;
  }

  return 0;
}
```

</details>
