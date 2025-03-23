# [Find the longest gap!](https://www.codewars.com/kata/56bf3287b5106eb10f000899)

A binary gap within a positive number `num` is any sequence of consecutive zeros that is surrounded by ones at both ends
in the binary representation of `num`.  
For example:  
`9` has binary representation `1001` and contains a binary gap of length `2`.  
`529` has binary representation `1000010001` and contains two binary gaps: one of length `4` and one of length `3`.  
`20` has binary representation `10100` and contains one binary gap of length `1`.  
`15` has binary representation `1111` and has `0` binary gaps.  
Write `function gap(num)` that, given a positive `num`, returns the length of its longest binary gap.  
The function should return `0` if `num` doesn't contain a binary gap.

---

<details><summary>My Solution</summary>

```js
function gap(num) {
  let binary = num.toString(2);
  let binaryWithGap = binary.slice(0, binary.lastIndexOf("1"));
  const gaps = binaryWithGap.split(/1+/g).filter((v) => v);

  return gaps.reduce((max, gap) => Math.max(max, gap.length), 0);
}
```

</details>
