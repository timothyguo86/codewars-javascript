# [Thinkful - Logic Drills: Traffic light](https://www.codewars.com/kata/58649884a1659ed6cb000072)

You're writing code to control your town's traffic lights. You need a function to handle each change from `green`, to
`yellow`, to `red`, and then to `green` again.

Complete the function that takes a string as an argument representing the current state of the light and returns a
string representing the state the light should change to.

For example, when the input is `green`, output should be `yellow`.

---

<details><summary>My Solution</summary>

```js
function updateLight(current) {
  const lights = ["green", "yellow", "red"];
  const currentIndex = lights.indexOf(current);
  const nextIndex = (currentIndex + 1) % lights.length;

  return lights[nextIndex];
}
```

</details>
