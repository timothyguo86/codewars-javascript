# [Working with arrays II (and why your code fails in some katas)](https://www.codewars.com/kata/5a7b3d08fd5777bf6a000121)

In this kata the function returns an array/list like the one passed to it but with its nth element removed (with
`0 <= n <= array/list.length - 1`). The function is already written for you and the basic tests pass, but random tests
fail. Your task is to figure out why and fix it.

Good luck!

Some good
reading: [MDN Docs about arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

<details><summary>My Solution</summary>

```js
function removeNthElement(arr, n) {
  let arrCopy = [...arr];
  arrCopy.splice(n, 1);
  return arrCopy;
}
```

</details>
