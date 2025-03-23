# [Take a Ten Minutes Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228)

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an
appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk
Generating App on their phones -- every time you press the button it sends you an array of one-letter strings
representing directions to walk (e.g., `['n', 's', 'w', 'e']`). You always walk only a single block for each letter (
direction) and you know it takes you one minute to traverse one city block, so create a function that will return **true
** if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of
course, return you to your starting point. Return **false** otherwise.

**Note**: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or '
w' only). It will never give you an empty array (that's not a walk, that's standing still!).

---

<details><summary>My Solution</summary>

```js
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false; // The walk should take exactly ten minutes
  }

  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;

  // Count the number of steps in each direction
  walk.forEach((direction) => {
    switch (direction) {
      case "n":
        north++;
        break;
      case "s":
        south++;
        break;
      case "e":
        east++;
        break;
      case "w":
        west++;
        break;
      default:
        break;
    }
  });

  // Check if the total number of steps in each direction cancels out
  return north === south && east === west;
}
```

</details>
