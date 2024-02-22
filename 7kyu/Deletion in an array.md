# [Deletion in an array](https://www.codewars.com/kata/5505552bd181b990d9000caf)

The `deleteValues` function takes an array and removes elements that answer `true` to the `pred` function.

For some reason, some of the elements of the array for which the predicate holds are not deleted...

Can you fix the code?

---

<details><summary>My Solution</summary>

```js
function deleteValues(array, pred) {
  // Iterate over the array in reverse order
  for (var i = array.length - 1; i >= 0; i--) {
    // Check if the predicate returns true for the current element
    if (pred(array[i])) {
      // If the predicate returns true, remove the element from the array
      array.splice(i, 1)
    }
  }
  // Return the modified array
  return array
}
```

</details>
