# [Product Array (Array Series #5)](https://www.codewars.com/kata/5a905c2157c562994900009d)

# Introduction and Warm-up (Highly recommended)

# [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)

---

# Task

**_Given_** an _array/list \[\] of integers_ , **_Construct_** a _product array \*\*\_Of same size_\*\* Such That
prod\[i\] is equal to The Product of all the elements of Arr\[\] except Arr\[i\]\_.

---

# Notes

- **_Array/list_** size is _at least 2_ .
- **_Array/list's numbers_** Will be **_only Positives_**
- **_Repetition_** of numbers in _the array/list could occur_.

  ***

# Input >> Output Examples

    productArray ({12,20}) ==>  return {20,12}

## **_Explanation_**:

- **_The first element_** _in prod \[\] array_ **_20_** _is the product of all array's elements except the first
  element_
- **_The second element_** **_12_** _is the product of all array's elements except the second element_ .

  ***

  productArray ({1,5,2}) ==> return {10,2,5}

## **_Explanation_**:

- **_The first element_** **_10_** _is the product of all array's elements_ **_except_** _the first element
  \*\*\_1_\*\*\_
- **_The second element_** **_2_** _is the product of all array's elements_ **_except_** _the second element_ **_5_**
- **_The Third element_** **_5_** _is the product of all array's elements_ **_except_** _the Third element_ **_2_**.

---

    productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}

## **_Explanation_**:

- **_The first element_** **_180_** _is the product of all array's elements_ **_except_** _the first element_ **_10_**
- **_The second element_** **_600_** _is the product of all array's elements_ **_except_** _the second element_ **_3_**
- **_The Third element_** **_360_** _is the product of all array's elements_ **_except_** _the third element_ **_5_**
- **_The Fourth element_** **_300_** _is the product of all array's elements_ **_except_** _the fourth element_ **_6_**
- _Finally_ ,**_The Fifth element_** **_900_** _is the product of all array's elements_ **_except_** _the fifth element_
  **_2_**

---

# [A more challenging version of this kata by Firefly2002](https://www.codewars.com/kata/array-product-sans-n)

---

---

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
function productArray(numbers) {
  const product = numbers.reduce((prod, cur) => prod * cur)
  return numbers.map(v => product / v)
}
```

</details>
