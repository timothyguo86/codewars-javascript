# [Consecutive strings](https://www.codewars.com/kata/56a5d994ac971f1ac500003e)

You are given an array(list) strarr of strings and an integer `k`. Your task is to return the first longest string
consisting of k consecutive strings taken in the array.

### Examples:

```
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
```

`n` being the length of the string array, if `n = 0` or` k > n` or `k <= 0` return "" (return `Nothing` in Elm, "
nothing" in Erlang).

### Note

consecutive strings : follow one after another without an interruption

---

<details><summary>My Solution</summary>

```js
function longestConsec(arr, k) {
  // Check for invalid input conditions: empty array, k greater than array length, or non-positive k
  if (arr.length === 0 || k > arr.length || k <= 0) return "";

  let consecStr = ""; // Variable to store the current consecutive string
  let longestStr = ""; // Variable to store the longest consecutive string

  // Iterate through the array to find the longest consecutive string
  for (let i = 0; i <= arr.length - k; i++) {
    consecStr = arr.slice(i, i + k);

    // Compare the length of the current consecutive string with the longest one found so far
    if (consecStr.join("").length > longestStr.length) {
      longestStr = consecStr.join("");
    }
  }

  return longestStr; // Return the longest consecutive string
}
```

</details>
