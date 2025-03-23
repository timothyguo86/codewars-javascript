# [Sum Strings as Numbers](https://www.codewars.com/kata/5324945e2ece5e1f32000370)

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

```js
sumStrings("1", "2"); // => '3'
```

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

---

<details><summary>My Solution</summary>

```js
function sumStrings(a, b) {
  let temp = ""; // Variable to store temporary sum during addition
  let str = ""; // Variable to store the final result
  let next = 0; // Variable to store the carry during addition

  // Remove leading zeros from both input strings
  a = a.replace(/^0+/, "");
  b = b.replace(/^0+/, "");

  // Ensure both strings have the same length by padding with zeros
  if (a.length > b.length) b = [a, (a = b)][0];

  while (a.length < b.length) {
    a = "0" + a;
  }

  // Iterate through the strings from right to left and perform addition
  for (var i = a.length - 1; i >= 0; i--) {
    // Calculate the sum of digits at the current position and the carry
    temp =
      parseInt(a.substring(i, i + 1)) + parseInt(b.substring(i, i + 1)) + next;

    // Append the last digit of the sum to the result string
    str = (temp % 10).toString() + str;

    // Update the carry for the next iteration
    next = temp <= 9 ? 0 : 1;
  }

  // If there is a carry after the last iteration, append it to the result
  if (next === 1) str = next + str;

  return str; // Return the final sum
}
```

</details>
