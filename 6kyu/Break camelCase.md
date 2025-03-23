# [Break camelCase](https://www.codewars.com/kata/5208f99aee097e6552000148)

Complete the solution so that the function will break up camel casing, using a space between words.

### Example

```
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
```

---

<details><summary>My Solution</summary>

```js
function solution(string) {
  // Replace each uppercase letter in the string with a space followed by the uppercase letter
  return string.replace(/[A-Z]/g, (a) => {
    return ` ${a}`;
  });
}
```

</details>
