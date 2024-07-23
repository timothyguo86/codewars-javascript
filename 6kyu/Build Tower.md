# [Build Tower](https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript)

# Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer `number of floors`. A tower block is represented with `"*"` character.

For example, a tower with `3` floors looks like this:

```
[
  "  *  ",
  " *** ", 
  "*****"
]
```

And a tower with `6` floors looks like this:

```
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
```

---

Go challenge [Build Tower Advanced](https://www.codewars.com/kata/57675f3dedc6f728ee000256) once you have finished this :)

---

<details><summary>My Solution</summary>

```js
function towerBuilder(nFloors) {
  const tower = [];
  for(let i = 1; i <= nFloors; i++){
  	tower.push(' '.repeat(nFloors - i) + '*'.repeat(2*i - 1) + ' '.repeat(nFloors - i));
  }
  return tower;
}
```

</details>
