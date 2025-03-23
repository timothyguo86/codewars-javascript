# [Do something "n.times" (Simplifying "for" loops)](https://www.codewars.com/kata/56e6a330715e7221d9000a3b)

### Task Summary

In case you got lost, here's precisely what you have to do: define a method `Number.prototype.times` that accepts a
function `f` as an argument and executes it as many times as the integer it is called on (e.g. `(100).times` would
execute something 100 times). The iteration variable `i` should be supplied to the anonymous function being executed in
order to support looping through array elements.

---

<details><summary>My Solution</summary>

```js
Number.prototype.times = function (f) {
  // Loop from 0 to the value of the number (exclusive)
  for (let i = 0; i < this; i++) {
    // Execute the provided callback function with the current iteration variable i
    f(i);
  }
};
```

</details>
