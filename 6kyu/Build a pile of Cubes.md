# [Build a pile of Cubes](https://www.codewars.com/kata/5592e3bd57b64d00f3000047)

Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of
n<sup>3</sup> of (n - 1)<sup>3</sup> and so on until the top which will have a volume of 1<sup>3</sup>.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to
build?

The parameter of the function findNb `(find_nb, find-nb, findNb, ...)` will be an integer m and you have to return the
integer n such as n<sup>3</sup> + (n - 1)<sup>3</sup> + (n - 2)<sup>3</sup> + ... + 1<sup>3</sup> = m if such a `n`
exists or -1 if there is no such `n`.

### Examples:

```
findNb(1071225) --> 45

findNb(91716553919377) --> -1
```

---

<details><summary>My Solution</summary>

```js
function findNb(m) {
  let n = 0 // Initialize a variable to represent the cube number

  // Keep subtracting the cube of the increasing n from m until m becomes non-positive
  while (m > 0) {
    n = n + 1 // Increment n to check the next cube
    m = m - Math.pow(n, 3) // Subtract the cube of n from m
  }

  // If m is still positive after the loop, return -1 (indicating no such cube exists)
  // Otherwise, return the value of n (the cube number found)
  return m ? -1 : n
}
```

</details>
