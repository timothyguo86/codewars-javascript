# [Reverse polish notation calculator](https://www.codewars.com/kata/52f78966747862fc9a0009ae)

Your job is to create a calculator which evaluates expressions
in [Reverse Polish notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation).

For example expression `5 1 2 + 4 * + 3 -` (which is equivalent to `5 + ((1 + 2) * 4) - 3` in normal notation) should
evaluate to `14`.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to `0`.

Valid operations are `+`, `-`, `*`, `/`.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).

---

<details><summary>My Solution</summary>

```js
function calc(expr) {
  if (!expr) return 0;
  const stack = [];
  const tokens = expr.split(" ");

  tokens.forEach((token) => {
    if (!isNaN(token)) stack.push(Number(token));
    else {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(eval(`${a} ${token} ${b}`));
    }
  });
  return stack[0];
}
```

</details>
