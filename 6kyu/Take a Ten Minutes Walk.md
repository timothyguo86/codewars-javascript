# [Take a Ten Minutes Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228)

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

```
"Hey fellow warriors"  --> "Hey wollef sroirraw"
"This is a test        --> "This is a test"
"This is another test" --> "This is rehtona test"
```

---

<details><summary>My Solution</summary>

```js
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false // The walk should take exactly ten minutes
  }

  let north = 0
  let south = 0
  let east = 0
  let west = 0

  // Count the number of steps in each direction
  walk.forEach(direction => {
    switch (direction) {
      case 'n':
        north++
        break
      case 's':
        south++
        break
      case 'e':
        east++
        break
      case 'w':
        west++
        break
      default:
        break
    }
  })

  // Check if the total number of steps in each direction cancels out
  return north === south && east === west
}
```

</details>
