# [Valid Parentheses](https://www.codewars.com/kata/551f37452ff852b7bd000139)

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The
function should return `true` if the string is valid, and `false` if it's invalid.

## Examples

```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```

## Constraints

`0 <= length of input <= 100`

- All inputs will be strings, consisting only of characters `(` and `)`.
- Empty strings are considered balanced (and therefore valid), and will be tested.
- For languages with mutable strings, the inputs should not be mutated.

_Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code
editor, and let the code highlighting show you!_

---

<details><summary>My Solution</summary>

```js
function validParentheses(parenStr) {
  const stack = []

  for (let paren of parenStr) {
    if (paren === '(') {
      stack.push(paren)
    } else {
      if (stack.length === 0) return false
      stack.pop()
    }
  }

  return stack.length === 0
}
```

</details>
