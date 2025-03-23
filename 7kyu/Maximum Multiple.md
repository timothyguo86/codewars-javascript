# [Maximum Multiple](https://www.codewars.com/kata/5aba780a6a176b029800041c)

# Task

**Given** a **Divisor and a Bound**, _Find the largest integer N_, Such That,

# Conditions:

- **N** is _divisible by divisor_
- **N** is _less than or equal to bound_
- **N** is _greater than 0_.

---

# Notes

- The **parameters (divisor, bound)** passed to the function are _only positive values_.
- _It's guaranteed that_ a **divisor is Found**.

---

# Input >> Output Examples

```
divisor = 2, bound = 7 ==> return (6)
```

## Explanation:

**(6)** is divisible by **(2)**, **(6)** is less than or equal to bound **(7)**, and **(6)** is > 0.

---

```
divisor = 10, bound = 50 ==> return (50)
```

## Explanation:

**(50)** is divisible by **(10)**, **(50)** is less than or equal to bound **(50)**, and **(50)** is > 0.

---

```
divisor = 37, bound = 200 ==> return (185)
```

## Explanation:

**(185)** is divisible by **(37)**, **(185)** is less than or equal to bound **(200)**, and **(185)** is > 0.

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
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}
```

</details>
