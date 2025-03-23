# [Next bigger number with the same digits](https://www.codewars.com/kata/55983863da40caa2c900004e)

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its
digits. For example:

      12 ==> 21
     513 ==> 531
    2017 ==> 2071

If the digits can't be rearranged to form a bigger number, return `-1` (or `nil` in Swift, `None` in Rust):

      9 ==> -1
    111 ==> -1
    531 ==> -1

---

<details><summary>My Solution</summary>

```js
function nextBigger(n) {
  let s = n.toString().split("");

  // Find the first digit that can be swapped to form a bigger number
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] > s[i - 1]) {
      // Find the smallest digit on the right side of (i-1)'th digit that is larger than s[i-1]
      let smallest = i;
      for (let j = i + 1; j < s.length; j++) {
        if (s[j] > s[i - 1] && s[j] < s[smallest]) {
          smallest = j;
        }
      }

      // Swap the found smallest digit with s[i-1]
      [s[i - 1], s[smallest]] = [s[smallest], s[i - 1]];

      // Sort the digits after (i-1) in ascending order
      let right = s.slice(i).sort();
      s = [...s.slice(0, i), ...right];

      return +s.join("");
    }
  }

  return -1;
}
```

</details>
