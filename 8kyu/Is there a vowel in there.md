# [Is there a vowel in there?](https://www.codewars.com/kata/57cff961eca260b71900008f)

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

---

<details><summary>My Solution</summary>

```js
function isVow(a) {
  return a.map((el) =>
    "aeiou".includes(String.fromCharCode(el)) ? String.fromCharCode(el) : el,
  );
}
```

</details>
