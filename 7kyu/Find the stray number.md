# [Find the stray number](https://www.codewars.com/kata/57f609022f4d534f05000024)

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

### Examples

```
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
```

---

<details><summary>My Solution</summary>

```js
function stray(numbers) {
  // Check if the first two numbers are equal
  if (numbers[0] === numbers[1]) {
    // If true, find the number that is different from the first two
    return numbers.find((v) => v !== numbers[0]);
  }

  // If the first two numbers are not equal, check if the first and third numbers are equal
  return numbers[0] === numbers[2] ? numbers[1] : numbers[0];
}
```

</details>
