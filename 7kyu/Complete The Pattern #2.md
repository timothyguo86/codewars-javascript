# [Complete The Pattern #2](https://www.codewars.com/kata/55733d3ef7c43f8b0700007c)

### Task:

You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

- Note: Returning the pattern is not the same as Printing the pattern.

### Rules/Note:

- If n < 1 then it should return "" i.e. empty string.
- There are no whitespaces in the pattern.

### Pattern:

```
(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
...............
..............
(n)(n-1)(n-2)
(n)(n-1)
(n)
```

### Examples:

- pattern(4):

```
4321
432
43
4
```

- pattern(11):

```
1110987654321
111098765432
11109876543
1110987654
111098765
11109876
1110987
111098
11109
1110
11
```

- Hint: Use \n in string to jump to next line

---

<details><summary>My Solution</summary>

```js
function pattern(n) {
  let str = "";

  if (n < 1) {
    return str; // Return an empty string for n less than 1
  } else {
    // Loop to construct the pattern based on the input number 'n'
    for (var j = n; j > 0; j--) {
      for (var i = n; i > n - j; i--) {
        // Concatenate the string with the decreasing numbers
        str = str.concat(i.toString());
      }
      // Add a newline character after each row of numbers
      str = str.concat("\n");
    }

    // Remove the trailing newline character
    str = str.slice(0, -1);

    return str; // Return the final pattern string
  }
}
```

</details>
