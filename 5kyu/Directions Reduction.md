# [Directions Reduction](https://www.codewars.com/kata/550f22f4d758534c1100025a)

#### Once upon a time, on a way through the old wild _mountainous_ west,…

… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST".
Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction _right away_ is a needless effort. Since this is the wild
west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of
thirst!

#### How I crossed a _mountainous_ desert the smart way.

The directions given to the man are, for example, the following (depending on the language):

```
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
```

You can immediately see that going "NORTH" and _immediately_ "SOUTH" is not reasonable, better stay to the same place!
So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

```
["WEST"]
or
{ "WEST" }
or
[West]
```

#### Other examples:

In `["NORTH", "SOUTH", "EAST", "WEST"]`, the direction `"NORTH" + "SOUTH"` is going north and coming back _right away_.

The path becomes `["EAST", "WEST"]`, now `"EAST"` and `"WEST"` annihilate each other, therefore, the final result is
`[]` (nil in Clojure).

In `["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]`, "NORTH" and "SOUTH" are _not_ directly opposite but they become
directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to `["WEST", "WEST"]`.

#### Task

Write a function `dirReduc` which will take an array of strings and returns an array of strings with the needless
directions removed (W<->E or S<->N _side by side_).

- The Haskell version takes a list of directions with `data Direction = North | East | West | South`.
- The Clojure version returns nil when the path is reduced to nothing.
- The Rust version takes a slice of `enum Direction {North, East, West, South}`.

#### See more examples in "Sample Tests:"

#### Notes

- Not all paths can be made simpler. The path `["NORTH", "WEST", "SOUTH", "EAST"]` is not reducible. "NORTH" and "
  WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not _directly_ opposite of each other and can't become such. Hence
  the result path is itself : `["NORTH", "WEST", "SOUTH", "EAST"]`.
- If you want to translate, please ask before translating.

---

<details><summary>My Solution</summary>

```js
function dirReduc(arr) {
  const dirPairs = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  for (let i = 0; i < arr.length - 1; i++) {
    if (dirPairs[arr[i]] === arr[i + 1]) {
      const reducedDirections = [...arr.slice(0, i), ...arr.slice(i + 2)];
      return dirReduc(reducedDirections);
    }
  }

  return arr;
}
```

</details>
