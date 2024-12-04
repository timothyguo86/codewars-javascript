# [What dominates your array?](https://www.codewars.com/kata/559e10e2e162b69f750000b4)

A zero-indexed array `arr` consisting of n integers is given. The dominator of array `arr` is the value that occurs in **more** than half of the elements of `arr`.  
For example, consider array `arr` such that `arr = [3,4,3,2,3,1,3,3]`  
The dominator of `arr` is 3 because it occurs in 5 out of 8 elements of `arr` and 5 is more than a half of 8.  
Write a function `dominator(arr)` that, given a zero-indexed array `arr` consisting of n integers, returns the dominator of `arr`. The function should return −1 if array does not have a dominator. All values in `arr` will be >=0.

---

<details><summary>My Solution</summary>

```js
function dominator(arr) {
  const dict = {}
  arr.forEach(v => {
    if (dict[v]) dict[v]++
    else dict[v] = 1
  })
  const keys = Object.keys(dict)
  for (let k of keys) {
    if (dict[k] > arr.length / 2) return Number(k)
  }

  return -1
}
```

</details>
