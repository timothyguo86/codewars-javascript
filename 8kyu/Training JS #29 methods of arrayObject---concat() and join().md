# [Training JS #29: methods of arrayObject---concat() and join()](https://www.codewars.com/kata/5731861d05d14d6f50000626)

### Task

Coding in function `bigToSmall`. function accept 1 parameter `arr`(2D number array).

Your task is: First to all, refer to the example above, flat output `arr` to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator `">"` to connect the elements into a string.

Don't complain about the situation like `1>1` is not reasonable, it is just a separator.

Some example:

```
bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
```

---

<details><summary>My Solution</summary>

```js
function whatNumberIsIt(n) {
  switch (n) {
    case Number.MAX_VALUE:
      return 'Input number is Number.MAX_VALUE'
    case Number.MIN_VALUE:
      return 'Input number is Number.MIN_VALUE'
    case Number.NEGATIVE_INFINITY:
      return 'Input number is Number.NEGATIVE_INFINITY'
    case Number.POSITIVE_INFINITY:
      return 'Input number is Number.POSITIVE_INFINITY'
    case Number(n):
      return `Input number is ` + n
    default:
      return 'Input number is Number.NaN'
  }
}
```

</details>
