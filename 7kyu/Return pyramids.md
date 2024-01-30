# [Return pyramids](https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b)

The task is very simple.

You must to return pyramids. Given a number `n` you print a pyramid with `n` floors

For example , given a `n=4` you must to print this pyramid:

```
   /\
  /  \
 /    \
/______\
```

Other example, given a `n=6` you must to print this pyramid:

```
     /\
    /  \
   /    \
  /      \
 /        \
/__________\
```

Another example, given a `n=10`, you must to print this pyramid:

```
         /\
        /  \
       /    \
      /      \
     /        \
    /          \
   /            \
  /              \
 /                \
/__________________\
```

Note: an extra line feed character is needed at the end of the string. Case `n=0` should so return `"\n"`.

---

<details><summary>My Solution</summary>

```js
function pyramid(n) {
  if (n === 0) {
    return '\n' // Return a newline character for an empty pyramid
  }

  let str = ''
  for (let i = 1; i <= n; i++) {
    if (i < n) {
      // Construct the upper part of the pyramid with slashes, spaces, and backslashes
      str += ' '.repeat(n - i) + '/' + ' '.repeat(2 * i - 2) + '\\\n'
    } else {
      // Construct the bottom part of the pyramid with a top border of slashes, underscores, and backslashes
      str += '/' + '_'.repeat(2 * n - 2) + '\\\n'
    }
  }

  return str
}
```

</details>
