# [Transpose two strings in an array](https://www.codewars.com/kata/581f4ac139dc423f04000b99)

You will be given an array that contains two strings. Your job is to create a function that will take those two strings
and transpose them, so that the strings go from top to bottom instead of left to right.

    e.g. transposeTwoStrings(['Hello','World']);

    should return

    H W
    e o
    l r
    l l
    o d

A few things to note:

1. There should be one space in between the two characters
2. You don't have to modify the case (i.e. no need to change to upper or lower)
3. If one string is longer than the other, there should be a space where the character would be

---

<details><summary>My Solution</summary>

```js
function transposeTwoStrings(array) {
  let maxLength = Math.max(array[0].length, array[1].length);
  let first = array[0].padEnd(maxLength, " ");
  let second = array[1].padEnd(maxLength, " ");
  let output = [];

  for (let i = 0; i < maxLength; i++) {
    output.push(`${first[i]} ${second[i]}`);
  }

  return output.join("\n");
}
```

</details>
