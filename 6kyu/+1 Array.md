# [+1 Array](https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9)

Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return `nil` (or your
language's equivalent).

### Examples

**Valid arrays**

- `[4, 3, 2, 5]` would return `[4, 3, 2, 6]` (4325 + 1 = 4326)
- `[1, 2, 3, 9]` would return `[1, 2, 4, 0]` (1239 + 1 = 1240)
- `[9, 9, 9, 9]` would return `[1, 0, 0, 0, 0]` (9999 + 1 = 10000)
- `[0, 1, 3, 7]` would return `[0, 1, 3, 8]` (0137 + 1 = 0138)

**Invalid arrays**

- `[]` is invalid because it is empty
- `[1, -9]` is invalid because `-9` is **not a non-negative integer**
- `[1, 2, 33]` is invalid because `33` is **not a single-digit integer**

---

<details><summary>My Solution</summary>

```js
/**
 * Increments the given array of non-negative single-digit integers by one.
 *
 * @param {number[]} arr - The array of non-negative single-digit integers.
 * @returns {number[] | null} - The incremented array, or null if the input is invalid.
 *
 * The function performs the following steps:
 * 1. Checks if the array contains any invalid elements (negative numbers or numbers greater than 9) or if the array is empty. If so, it returns null.
 * 2. Iterates through the array from the last element to the first.
 * 3. If the current element is less than 9, it increments the element by one and returns the array.
 * 4. If the current element is 9, it sets the element to 0 and continues to the next element.
 * 5. If all elements are 9, the function returns a new array with a leading 1 followed by zeros.
 */
function upArray(arr) {
  if (arr.some((v) => v > 9 || v < 0) || arr.length === 0) return null;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++;
      return arr;
    }
    arr[i] = 0;
  }

  return [1, ...arr];
}
```

</details>
