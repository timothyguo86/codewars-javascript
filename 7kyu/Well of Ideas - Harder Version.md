# [Well of Ideas - Harder Version](https://www.codewars.com/kata/52dbae61ca039685460001ae)

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there
are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good
ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be
strings.

---

<details><summary>My Solution</summary>

```js
function well(x) {
  let goodIdeasCount = (x.flat().join('').match(/good/gi) || []).length

  if (goodIdeasCount > 2) return 'I smell a series!'
  else if (!goodIdeasCount) return 'Fail!'
  return 'Publish!'
}
```

</details>
