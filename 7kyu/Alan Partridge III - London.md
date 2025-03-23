# [Alan Partridge III - London](https://www.codewars.com/kata/580a41b6d6df740d6100030c)

# Backstory

Ever the learned traveller, Alan Partridge has pretty strong views on London:

    "Go to London. I guarantee you'll either be mugged or not appreciated.
    Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway."

# Task

Your job is to check that the provided `list / array of stations` contains all of the stops Alan mentions. The list of
stops are as follows:

    Rejection
    Disappointment
    Backstabbing Central
    Shattered Dreams Parkway

If all the stops appear in the given `list / array`, return `Smell my cheese you mother!`, if not, return
`No, seriously, run. You will miss it.`.

# Other katas in this series:

[Alan Partridge I - Partridge Watch](https://www.codewars.com/kata/alan-partridge-i-partridge-watch)  
[Alan Partridge II - Apple Turnover](https://www.codewars.com/kata/alan-partridge-ii-apple-turnover)

---

<details><summary>My Solution</summary>

```js
function alan(x) {
  const stops = [
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway",
  ];
  return stops.every((v) => x.includes(v))
    ? "Smell my cheese you mother!"
    : "No, seriously, run. You will miss it.";
}
```

</details>
