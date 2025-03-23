# [Counting Valleys](https://www.codewars.com/kata/5da9973d06119a000e604cb6)

You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as
an exit of a valley.

One passed valley is equal one entry and one exit of a valley.

    s='FUFFDDFDUDFUFUF'
    U=UP
    F=FORWARD
    D=DOWN

To represent string above

    (level 1)  __
    (level 0)_/  \         _(exit we are again on level 0)
    (entry-1)     \_     _/
    (level-2)       \/\_/

So here we passed one valley

---

<details><summary>My Solution</summary>

```js
function countingValleys(s) {
  let level = 0;
  let count = 0;
  s.split("").forEach((v) => {
    if (v === "D") {
      level--;
      if (level === -1) count++;
    } else if (v === "U") {
      level++;
      if (level === 0) count++;
    }
  });

  return Math.floor(count / 2);
}
```

</details>
