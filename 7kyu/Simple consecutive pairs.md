# [Simple consecutive pairs](https://www.codewars.com/kata/5a3e1319b6486ac96f000049)

In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

    pairs([1,2,5,8,-4,-3,7,6,5]) = 3
    The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
    --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
    --the second pair is (5,8) and are not consecutive
    --the third pair is (-4,-3), consecutive. Count = 2
    --the fourth pair is (7,6), also consecutive. Count = 3.
    --the last digit has no pair, so we ignore.

More examples in the test cases.

Good luck!

Please also try [Simple time difference](https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2)

---

<details><summary>My Solution</summary>

```js
function pairs(ar) {
  let result = 0;
  for (let i = 0; i < ar.length - 1; i = i + 2) {
    if (ar[i] - ar[i + 1] === 1 || ar[i] - ar[i + 1] === -1) result++;
  }

  return result;
}
```

</details>
