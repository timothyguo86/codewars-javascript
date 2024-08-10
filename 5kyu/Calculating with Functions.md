# [Calculating with Functions](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39)

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

```javascript
seven(times(five())) // must return 35
four(plus(nine())) // must return 13
eight(minus(three())) // must return 5
six(dividedBy(two())) // must return 3
```

### Requirements

- There must be a function for each number from 0 ("zero") to 9 ("nine").
- There must be a function for each of the following mathematical operations: `plus`, `minus`, `times`, `dividedBy`.
- Each calculation consists of exactly one operation and two numbers.
- The outermost function represents the left operand, and the innermost function represents the right operand.
- Division should be **integer division**. For example, `8 dividedBy 3` should return `2`, not `2.666666...`.

```
eight(dividedBy(three()));
```

---

<details><summary>My Solution</summary>

```js
const zero = op => (op ? op(0) : 0)
const one = op => (op ? op(1) : 1)
const two = op => (op ? op(2) : 2)
const three = op => (op ? op(3) : 3)
const four = op => (op ? op(4) : 4)
const five = op => (op ? op(5) : 5)
const six = op => (op ? op(6) : 6)
const seven = op => (op ? op(7) : 7)
const eight = op => (op ? op(8) : 8)
const nine = op => (op ? op(9) : 9)

const plus = b => a => a + b
const minus = b => a => a - b
const times = b => a => a * b
const dividedBy = b => a => Math.floor(a / b)
```

</details>
