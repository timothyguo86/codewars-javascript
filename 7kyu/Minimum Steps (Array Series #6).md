# [Minimum Steps (Array Series #6)](https://www.codewars.com/kata/5a91a7c5fd8c061367000002)

# Task

**_Given_** _an array of N integers, you have to find_ **_how many times_** _you have to_ **_add up the smallest numbers_** _in the array until_ **_their Sum_** _becomes greater or equal to_ **_K_**.

---

# Notes:

- **_List size_** is _at least 3_.
- **_All numbers_** _will be_ **_positive_**.
- **_Numbers_** could _occur more than once_ , **_(Duplications may exist)_**.
- Threshold **_K_** will _always be reachable_.

  ***

  # Input >> Output Examples

  minimumSteps({1, 10, 12, 9, 2, 3}, 6) ==> return (2)

## **_Explanation_**:

- We _add two smallest elements_ **_(1 + 2)_**, _their sum is 3_ .
- **_Then_** we **_add the next smallest number to it (3 + 3)_** , so _the sum becomes 6_ .
- **_Now_** the result is greater or equal to **_6_** , _Hence the output is (2) i.e (2) operations are required to do this_ .

  ***

      minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)

  ## **_Explanation_**:

- We _add two smallest elements_ **_(4 + 2)_**, _their sum is 6_ .
- **_Then_** we **_add the next smallest number to it (6 + 8)_** , so _the sum becomes 14_ .
- **_Now_** we **_add the next smallest number (14 + 9)_** , so _the sum becomes 23_ .
- **_Now_** the result is greater or equal to **_23_** , _Hence the output is (3) i.e (3) operations are required to do this_ .

  ***

      minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)

  ## **_Explanation_**:

- We _add two smallest elements_ **_(19 + 17)_**, _their sum is 36_ .
- **_Then_** we **_add the next smallest number to it (36 + 28)_** , so _the sum becomes 64_ .
- We need to **_keep doing this_** _until \*\*\_the sum_** becomes greater or equal to **_K_** (464 in this case)\_, which will require **_8_\*\* Steps .

  ***

  ## Expected Time Complexity `O(n Log n)`

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
function minimumSteps(numbers, value) {
  let total = 0
  const sortedNums = numbers.sort((a, b) => a - b)

  for (let i = 0; i < sortedNums.length; i++) {
    total += sortedNums[i]
    if (total >= value) return i
  }
}
```

</details>
