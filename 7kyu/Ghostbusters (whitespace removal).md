# [Ghostbusters (whitespace removal)](https://www.codewars.com/kata/5668e3800636a6cd6a000018)

Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

    "Sky scra per" -> "Skyscraper"

If the building contains no ghosts, return the string:

    "You just wanted my autograph didn't you?"

---

<details><summary>My Solution</summary>

```js
function semicolonSeparationToCommaSeparation(input) {
  let arr = building.split(/\s+/g);
  return arr.length === 1
    ? "You just wanted my autograph didn't you?"
    : arr.join("");
}
```

</details>
