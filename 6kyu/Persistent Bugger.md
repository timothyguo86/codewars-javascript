# [Persistent Bugger.](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)

Write a function, `persistence`, that takes in a positive parameter `num` and returns its multiplicative persistence,
which is the number of times you must multiply the digits in `num` until you reach a single digit.

For example (**Input** --> **Output**):

```
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
```

---

<details><summary>My Solution</summary>

```js
function persistence(num, count = 0) {
  // Check if num is less than 10, if so, return the count
  if (num < 10) return count;

  // Convert num to string, split it into an array of digits, and reduce it by multiplying each digit
  const newNum = num
    .toString()
    .split("")
    .reduce((acc, cur) => (acc = acc * cur), 1);

  // Increment the count
  count++;

  // Recursively call persistence with the newNum and updated count
  return persistence(newNum, count);
}
```

</details>
