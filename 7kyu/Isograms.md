# [Isograms](https://www.codewars.com/kata/54ba84be607a92aa900000f1)

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines
whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

### Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

```
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
```

---

<details><summary>My Solution</summary>

```js
function isIsogram(str) {
  const strMap = {} // Create an object to track the occurrences of characters
  const cleanedStr = str.toLowerCase() // Convert the input string to lowercase for case-insensitive comparison

  for (let char of cleanedStr) {
    // Iterate through each character in the cleaned string
    if (strMap[char] === undefined) {
      // If the character is not in the map, add it with an occurrence count of 1
      strMap[char] = 1
    } else {
      // If the character is already in the map, the string is not an isogram
      return false
    }
  }

  // If no repeated characters are found, the string is an isogram
  return true
}
```

</details>
