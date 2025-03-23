# [Alan Partridge I - Partridge Watch](https://www.codewars.com/kata/5808c8eff0ed4210de000008)

# Backstory

![](./../images/alan_partidge.jpg)

To celebrate today's launch of my Hero's new book: `Alan Partridge: Nomad`, We have a new series of kata arranged around
the great man himself.

# Task

Given an array of terms, if any of those terms relate to Alan Partridge, return `Mine's a Pint!`

The number of exclamation mark (`!`) after the `t` should be determined by the number of Alan related terms you find in
the given array (`x`). The related terms are as follows:

    Partridge
    PearTree
    Chat
    Dan
    Toblerone
    Lynn
    AlphaPapa
    Nomad

If you don't find any related terms, return `Lynn, I've pierced my foot on a spike!!`

# Other katas in this series:

[Alan Partridge II - Apple Turnover](https://www.codewars.com/kata/alan-partridge-ii-apple-turnover)  
[Alan Partridge III - London](https://www.codewars.com/kata/alan-partridge-iii-london)

---

<details><summary>My Solution</summary>

```js
function part(x) {
  const terms = [
    "Partridge",
    "PearTree",
    "Chat",
    "Dan",
    "Toblerone",
    "Lynn",
    "AlphaPapa",
    "Nomad",
  ];
  let match = 0;
  for (let w of x) {
    if (terms.includes(w)) match++;
  }

  return match
    ? `Mine's a Pint${"!".repeat(match)}`
    : `Lynn, I've pierced my foot on a spike!!`;
}
```

</details>
