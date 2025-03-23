# [Array Mash](https://www.codewars.com/kata/582642b1083e12521f0000da)

Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be
the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

---

<details><summary>My Solution</summary>

```js
function arrayMash(array1, array2) {
  let output = [];
  array1.forEach((v, i) => output.push(v, array2[i]));
  return output;
}
```

</details>
