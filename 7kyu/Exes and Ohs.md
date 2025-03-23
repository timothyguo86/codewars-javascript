# [Exes and Ohs](https://www.codewars.com/kata/55908aad6620c066bc00002a)

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
The string can contain any char.

Examples input/output:

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```

---

<details><summary>My Solution</summary>

```js
function XO(str) {
  // Check if the count of 'x' (case-insensitive) is equal to the count of 'o' (case-insensitive)
  return (
    (str.match(/x/gi) && str.match(/x/gi).length) ===
    (str.match(/o/gi) && str.match(/o/gi).length)
  );
}
```

</details>
