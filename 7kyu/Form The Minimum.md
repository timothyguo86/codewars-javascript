# [Form The Minimum](https://www.codewars.com/kata/5ac6932b2f317b96980000ca)

# Task

**Given** a **list of digits**, return the **smallest number** that could be formed from these digits, using the digits
only once (ignore duplicates).

---

# Notes:

- Only **positive integers** will be passed to the function (> 0), no negatives or zeros.

---

# Input >> Output Examples

`minValue({1, 3, 1})  ==> return (13)`

## Explanation:

**(13)** is the minimum number that could be formed from **{1, 3, 1}**, without duplications.

---

`minValue({5, 7, 5, 9, 7})  ==> return (579)`

## Explanation:

**(579)** is the minimum number that could be formed from **{5, 7, 5, 9, 7}**, without duplications.

---

`minValue({1, 9, 3, 1, 7, 4, 6, 6, 7})  ==> return (134679)`

## Explanation:

**(134679)** is the minimum number that could be formed from **{1, 9, 3, 1, 7, 4, 6, 6, 7}**, without duplications.

---

## [Playing with Numbers Series](https://www.codewars.com/collections/playing-with-numbers)

## [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)

## [Bizarre Sorting-katas](https://www.codewars.com/collections/bizarre-sorting-katas)

## [For More Enjoyable Katas](http://www.codewars.com/users/MrZizoScream/authored)

---

## ALL translations are welcomed

## Enjoy Learning !!

# Zizou

---

<details><summary>My Solution</summary>

```js
function minValue(values) {
  const uniqueValues = [...new Set(values)]

  // Sort the unique values in ascending order and join them into a string, then convert the string to a number
  return +uniqueValues.sort((a, b) => a - b).join('')
}
```

</details>
