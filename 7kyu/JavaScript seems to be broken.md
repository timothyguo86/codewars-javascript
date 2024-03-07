# JavaScript seems to be broken](https://www.codewars.com/kata/565d6d1696e154b51b000076/)

There is some horribly rotten script that is not required in your project anymore, and it is affecting the way your code is supposed to work.

For some reason you don't have an access to that rotten piece of code but you want to get your code working as expected in any possible way.

Go and get it working!

---

<details><summary>My Solution</summary>

```js
function semicolonSeparationToCommaSeparation(input) {
  // The .join method of Array is replaced by ._join
  // input: console.log(Array.prototype.join.toString())
  //
  // output: function () {
  //   return this._join(";");
  // }
  // So just use ._join instead of the default .join method
  return input.split(';')._join(',')
}
```

</details>
