# [Reversed Strings](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

Complete the solution so that it reverses the string passed into it.

```
'world'  =>  'dlrow'
'word'   =>  'drow'
```

---

<details><summary>My Solution</summary>

```js
function solution(str) {
  // Reverse the characters in the input string and join them back
  return [...str].reverse().join('')
}
```

</details>
