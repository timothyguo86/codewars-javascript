# [The Office III - Broken Photocopier](https://www.codewars.com/kata/57ed56657b45ef922300002b)

The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.

[The Office I - Outed](https://www.codewars.com/kata/the-office-i-outed)  
[The Office II - Boredeom Score](https://www.codewars.com/kata/the-office-ii-boredom-score)  
[The Office IV - Find a Meeting Room](https://www.codewars.com/kata/the-office-iv-find-a-meeting-room)  
[The Office V - Find a Chair](https://www.codewars.com/kata/the-office-v-find-a-chair)

---

<details><summary>My Solution</summary>

```js
function broken(x) {
  return x.replace(/[01]/g, (c) => (c === "0" ? "1" : "0"));
}
```

</details>
