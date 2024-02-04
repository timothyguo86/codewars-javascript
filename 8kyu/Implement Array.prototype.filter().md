# [Implement Array.prototype.filter()](https://www.codewars.com/kata/56dd9b84fe5754786f0014f7)

What we want to implement is `Array.prototype.filter()` function, just like the existing `Array.prototype.filter()`. Another similar function is `_.filter()` in underscore.js and lodash.js.

The usage will be quite simple, like:

```
[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
```

_Of course, the existing `Array.prototype.filter()` function has been undefined for the purposes of this Kata._

---

More info can be found here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

---

<details><summary>My Solution</summary>

```js
// Extend the filter method of the Array prototype
Array.prototype.filter = function (func) {
  // Initialize an empty array to store the filtered elements
  let result = []

  // Iterate through each element in the array
  this.forEach(el => {
    // Check if the element satisfies the condition defined by the provided function
    if (func(el)) {
      // If the condition is true, add the element to the result array
      result.push(el)
    }
  })

  // Return the array containing the filtered elements
  return result
}
```

</details>
