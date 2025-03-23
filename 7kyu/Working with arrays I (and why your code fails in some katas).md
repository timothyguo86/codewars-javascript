# [Working with arrays I (and why your code fails in some katas)](https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e)

In this kata the function returns an array/list of numbers without its last element. The function is already written for
you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

Good luck!

Hint: watch out for side effects.

## Some good reading: [MDN Docs about arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

<details><summary>My Solution</summary>

```js
// The lessons here were: read the docs and DON'T MUTATE THE INPUT

// Some katas use the input after you've processed it
// (in this case I made that on purpose),
// mutating it makes the tests fail, so watch out.

function withoutLast(arr) {
  newArray = [...arr];
  newArray.pop();
  return newArray;
}
```

</details>
