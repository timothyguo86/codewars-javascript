# [Product of Largest Pair](https://www.codewars.com/kata/5784c89be5553370e000061b)

Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a **performant**
solution to find the product of the largest two integers in a **unique** array of **positive** numbers.  
All inputs will be valid.  
Passing \[2, 6, 3\] should return 18, the product of \[6, 3\].

`Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).`

    max_product([2, 1, 5, 0, 4, 3])              # => 20
    max_product([7, 8, 9])                       # => 72
    max_product([33, 231, 454, 11, 9, 99, 57])   # => 104874

---

<details><summary>My Solution</summary>

```js
function maxProduct(a) {
  let max = Math.max(a[0], a[1]);
  let secondMax = Math.min(a[0], a[1]);

  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      secondMax = max;
      max = a[i];
    } else if (a[i] > secondMax) secondMax = a[i];
  }

  return max * secondMax;
}
```

</details>
