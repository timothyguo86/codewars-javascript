# [Multiply the strings in the array](https://www.codewars.com/kata/59b2963132779166d2001018)

You received an array with two strings.  
Create a function that will return their product as a string.  
E.g.

    input: ['3', '5'] => output: '15'
    input: ['2', '-3'] => output: '-6'
    input: ['9', '0'] => output: '0'

---

<details><summary>My Solution</summary>

```js
function arrMultiply(arr) {
  return (arr[0] * arr[1]).toString();
}
```

</details>
