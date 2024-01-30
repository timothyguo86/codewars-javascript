# [Two Sum](https://www.codewars.com/kata/52c31f8e6605bcc646000082)

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

```js
twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
```

---

<details><summary>My Solution</summary>

```js
function twoSum(nums, target) {
  const map = new Map() // Create a Map to store values and their corresponding indices

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i] // Current element in the array
    const b = target - a // The complementary value needed to reach the target

    if (map.has(b)) {
      // Check if the complementary value has been encountered before
      return [i, map.get(b)] // If found, return the indices of the two numbers that add up to the target
    } else {
      map.set(a, i) // Store the current element and its index in the Map
    }
  }
}
```

</details>
