# [Extra Perfect Numbers (Special Numbers Series #7)](https://www.codewars.com/kata/5a662a02e626c54e87000123)

# Definition

**_Extra perfect number_** _is the number that_ **_first_** and **_last_** _bits_ are **_set bits_**.

---

# Task

**_Given_** _a positive integer_ `N` , **_Return_** the **_extra perfect numbers_** _in range from_ `1` to `N` .

---

# Warm-up (Highly recommended)

# [Playing With Numbers Series](https://www.codewars.com/collections/playing-with-numbers)

---

# Notes

- **_Number_** _passed is always_ **_Positive_** .
- **_Returned array/list_** should _contain the extra perfect numbers in ascending order_ **from lowest to highest**

  ***

# Input >> Output Examples

    extraPerfect(3)  ==>  return {1,3}

## **_Explanation_**:

# (1)10 =(1)2

**First** and **last** bits as **_set bits_**.

# (3)10 = (11)2

**First** and **last** bits as **_set bits_**.

---

    extraPerfect(7)  ==>  return {1,3,5,7}

## **_Explanation_**:

# (5)10 = (101)2

**First** and **last** bits as **_set bits_**.

# (7)10 = (111)2

**First** and **last** bits as **_set bits_**.

---

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
function extraPerfect(n) {
  const result = []
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    result.push(1 + 2 * i)
  }

  return result
}
```

</details>
