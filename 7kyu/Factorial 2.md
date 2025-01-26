# [Factorial](https://www.codewars.com/kata/57a049e253ba33ac5e000212)

Your task is to write function `factorial`.

[https://en.wikipedia.org/wiki/Factorial](https://en.wikipedia.org/wiki/Factorial)

<details><summary>My Solution</summary>

```js
function factorial(n) {
  return n ? n * factorial(n - 1) : 1
}
```

</details>
