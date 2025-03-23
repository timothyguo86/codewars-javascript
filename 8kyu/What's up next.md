# [What's up next?](https://www.codewars.com/kata/542ebbdb494db239f8000046)

Given a sequence of items and a specific item in that sequence, return the item immediately following the item
specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work
for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in
Haskell, undefined in JavaScript, None in Python.

```
nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"
```

---

<details><summary>My Solution</summary>

```js
function nextItem(xs, item) {
  let found = false

  // Iterate over each element in the array
  for (let el of xs) {
    // If the desired item is found, set 'found' to true.
    // Return the current element, which is the next item after the specified item
    if (found) return el
    // Check if the current element is equal to the specified item
    // Mark that the item has been found
    if (el === item) found = true
  }
  // If the specified item is not found or it's the last element in the array, return undefined
}
```

</details>
