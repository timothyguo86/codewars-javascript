# [Fac Recursion (Pest control - find the bugs and fix them)](https://www.codewars.com/kata/58dd98fe8d29b0f30d0002bd)

## Bob has written a function to detect the type of an object. It receives any primitive values or objects, and returns its object type as a string. But it seems to be working incorrectly. Can you figure out why, and fix the code for him?

<details><summary>My Solution</summary>

```js
function objectType(obj) {
  if (arguments.length === 0) return '[object Null]'

  return Object.prototype.toString.call(obj)
}
```

</details>
