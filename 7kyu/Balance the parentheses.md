# [Balance the parentheses](https://www.codewars.com/kata/5d8365b570a6f6001519ecc8)

Your job is to fix the parentheses so that all opening and closing parentheses (brackets) have matching counterparts. You will do this by appending parenthesis to the beginning or end of the string. The result should be of minimum length. Don't add unnecessary parenthesis.

The input will be a string of varying length, only containing '(' and/or ')'.

For example:

```
Input: ")("
Output: "()()"

Input: "))))(()("
Output: "(((())))(()())"
```

Enjoy!

---

<details><summary>My Solution</summary>

```js
const fixParentheses = str => {
  let openCount = 0;
  let closeCount = 0;

  // First pass: count unmatched closing parentheses
  for (let char of str) {
    if (char === '(') {
      openCount++;
    } else if (char === ')') {
      if (openCount > 0) {
        openCount--;
      } else {
        closeCount++;
      }
    }
  }

  // Appending parenthesis to the beginning or end of the string
  const prefix = '('.repeat(closeCount);
  const suffix = ')'.repeat(openCount);
  return prefix + str + suffix;
}
```

</details>
