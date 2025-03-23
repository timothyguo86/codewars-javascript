# [Swap the head and the tail](https://www.codewars.com/kata/5a34f087c5e28462d9000082)

You need to swap the head and the tail of the specified array:

the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (
if it exists) leaves on the same position.

Return new array.

For example:

       [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
        \----/   \----/
         head     tail

       [ -1, 2 ]  => [ 2, -1 ]
       [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]

---

<details><summary>My Solution</summary>

```js
function swapHeadAndTail(arr) {
  const midIndex = Math.floor(arr.length / 2);
  if (arr.length % 2)
    return [
      ...arr.slice(midIndex + 1),
      arr[midIndex],
      ...arr.slice(0, midIndex),
    ];
  else return [...arr.slice(midIndex), ...arr.slice(0, midIndex)];
}
```

</details>
