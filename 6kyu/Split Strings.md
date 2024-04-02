# [Split Strings](https://www.codewars.com/kata/515de9ae9dcfc28eb6000001)

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

### Example

For

```
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
```

---

<details><summary>My Solution</summary>

```js
function solution(str) {
  const pairs = []
  for (let i = 0; i < str.length; i += 2) {
    const pair = str.slice(i, i + 2).padEnd(2, '_')
    pairs.push(pair)
  }
  return pairs
}
```

</details>
