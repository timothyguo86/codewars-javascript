# [Middle Me](https://www.codewars.com/kata/59cd155d1a68b70f8e000117)

Write a function that will take a key of X and place it in the middle of Y repeated N times.

Extra challege (not tested): You can complete this with under 70 characters without using regex. Challenge yourself to do this. It wont be best practices but it will work.

Rules:

If X cannot be placed in the middle, return X.

N will always be > 0.

Example:

    X = 'A';

    Y = '*';

    N = 10;

    Y repeated N times = '**********';

    X in the middle of Y repeated N times = '*****A*****';

---

<details><summary>My Solution</summary>

```js
const middleMe = (N, X, Y) => (N % 2 ? X : Y.repeat(N / 2) + X + Y.repeat(N / 2))
```

</details>