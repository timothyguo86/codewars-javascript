# [Covfefe](https://www.codewars.com/kata/592fd8f752ee71ac7e00008a)

Your are given a string. You must replace any occurence of the sequence `coverage` by `covfefe`, however, if you don't find the word `coverage` in the string, you must add `covfefe` at the end of the string with a leading space.

For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

---

<details><summary>My Solution</summary>

```js
function covfefe(str) {
  let reg = /coverage/g
  if (!reg.test(str)) return str + ' covfefe'
  else return str.replace(reg, 'covfefe')
}
```

</details>
