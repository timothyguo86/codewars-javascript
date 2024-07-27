# [Write Number in Expanded Form](https://www.codewars.com/kata/5842df8ccbd22792a4000245)

# Write Number in Expanded Form

You will be given a number and you will need to return it as a string in [Expanded Form](https://www.mathsisfun.com/definitions/expanded-notation.html). For example:

```haskell
expandedForm 12    -- Should return '10 + 2'
expandedForm 42    -- Should return '40 + 2'
expandedForm 70304 -- Should return '70000 + 300 + 4'
```

NOTE: All numbers will be whole numbers greater than 0.
If you liked this kata, check out [part 2](https://www.codewars.com/kata/write-number-in-expanded-form-part-2)!!

---

<details><summary>My Solution</summary>

```js
function expandedForm(num) {
  return num
    .toString()
    .split('')
    .map((digit, index) => {
      return digit * Math.pow(10, num.toString().length - index - 1)
    })
    .filter(digit => digit > 0)
    .join(' + ')
}
```

</details>
