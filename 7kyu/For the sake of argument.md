# [For the sake of argument](https://www.codewars.com/kata/5258b272e6925db09900386a)

Write a function named `numbers`.

function should return True if all parameters are of the Number type.

The function should accept any number of parameters.

Example usage:

    numbers(1, 4, 3, 2, 5); # True
    numbers(1, "a", 3); # False
    numbers(1, 3, None); # False
    numbers(1.23, 5.6, 3.2) # True

---

<details><summary>My Solution</summary>

```js
const numbers = (...args) => {
  return args.every((v) => typeof v === "number");
};
```

</details>
