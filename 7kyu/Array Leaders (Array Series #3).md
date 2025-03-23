# [Array Leaders (Array Series #3)](https://www.codewars.com/kata/5a651865fd56cb55760000e0)

# Introduction and Warm-up (Highly recommended)

# [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)

---

# Definition

An **_element is leader_** _if it is greater than The Sum all the elements to its right side_.

---

# Task

**_Given_** an _array/list \[\] of integers_ , **_Find_** _all the \*\*\_LEADERS_\*\* in the array\_.

---

# Notes

- **_Array/list_** size is _at least 3_ .
- **_Array/list's numbers_** Will be **_mixture of positives , negatives and zeros_**
- **_Repetition_** of numbers in _the array/list could occur_.
- **_Returned Array/list_** _should store the leading numbers \*\*\_in the same order_\*\* in the original
  array/list\_ .

  ***

# Input >> Output Examples

    arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}

## **_Explanation_**:

- `4` _is greater than the sum all the elements to its right side_
- **_Note_** : **_The last element_** `0` _is equal to right sum of its elements (abstract zero)_.

  ***

  arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}

## **_Explanation_**:

- `17` _is greater than the sum all the elements to its right side_
- `5` _is greater than the sum all the elements to its right side_
- **_Note_** : **_The last element_** `2` _is greater than the sum of its right elements (abstract zero)_.

  ***

  arrayLeaders ({5, 2, -1}) ==> return {5, 2}

## **_Explanation_**:

- `5` _is greater than the sum all the elements to its right side_
- `2` _is greater than the sum all the elements to its right side_
- **_Note_** : **_The last element_** `-1` _is less than the sum of its right elements (abstract zero)_.

---

    arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}

## **_Explanation_**:

- `0` _is greater than the sum all the elements to its right side_
- `-1` _is greater than the sum all the elements to its right side_
- `3` _is greater than the sum all the elements to its right side_
- **_Note_** : **_The last element_** `2` _is greater than the sum of its right elements (abstract zero)_.

  ***

  ***

  ***

# [Playing with Numbers Series](https://www.codewars.com/collections/playing-with-numbers)

# [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)

# [For More Enjoyable Katas](http://www.codewars.com/users/MrZizoScream/authored)

---

## ALL translations are welcomed

## Enjoy Learning !!

# Zizou

---

<details><summary>My Solution</summary>

```js
function arrayLeaders(numbers) {
  const result = [];
  numbers.reverse().reduce((total, cur) => {
    if (cur > total) result.unshift(cur);
    return (total += cur);
  }, 0);

  return result;
}
```

</details>
