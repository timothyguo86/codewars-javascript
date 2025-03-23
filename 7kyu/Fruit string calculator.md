# [Fruit string calculator](https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3)

You are given a string of words and numbers. Extract the expression including:

1. the operator: either addition (`"gains"`) or subtraction (`"loses"`)
2. the two numbers that we are operating on

Return the result of the calculation.

**Notes:**

- `"loses"` and `"gains"` are the only two words describing operators
- No fruit debts nor bitten apples = The numbers are integers and no negatives

## Examples

    "Panda has 48 apples and loses 4"  -->  44
    "Jerry has 34 apples and gains 6"  -->  40

Should be a nice little kata for you :)

---

<details><summary>My Solution</summary>

```js
function calculate(string) {
  let num1 = Number(string.split(" ")[2]);
  let num2 = Number(string.split(" ")[6]);

  return string.split(" ")[5] === "gains" ? num1 + num2 : num1 - num2;
}
```

</details>
