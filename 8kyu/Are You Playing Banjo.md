# [Are You Playing Banjo?](https://www.codewars.com/kata/53af2b8861023f1d88000832)

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

```
name + " plays banjo"
name + " does not play banjo"
```

Names given are always valid strings.

---

<details><summary>My Solution</summary>

```js
function areYouPlayingBanjo(name) {
  // Check if the name starts with 'R' or 'r' and return the appropriate message
  if (name.startsWith("R") || name.startsWith("r")) {
    return `${name} plays banjo`;
  }

  return `${name} does not play banjo`;
}
```

</details>
