# [Gravity Flip](https://www.codewars.com/kata/5f70c883e10f9e0001c89673)

If you've completed this kata already and want a bigger challenge, here's
the [3D version](https://www.codewars.com/kata/5f849ab530b05d00145b9495/)

Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special
because it has the ability to change gravity.

There are some columns of toy cubes in the box arranged in a line. The i-th column contains `a_i` cubes. At first, the
gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a
certain side of the box, `d`, which can be either `'L'` or `'R'` (left or right). Below is an example of what a box of
cubes might look like before and after switching gravity.

```
+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
```

Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob
switches the gravity.

### Examples (input -> output):

```
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
*
```

---

<details><summary>My Solution</summary>

```js
const flip = (d, a) => {
  // Define a comparison function for sorting
  const compare = (a, b) => a - b;

  // Return the sorted array in ascending or descending order based on the direction 'd'
  return d === "R" ? a.sort(compare) : a.sort(compare).reverse();
};
```

</details>
