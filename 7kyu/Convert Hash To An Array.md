# [Convert Hash To An Array](https://www.codewars.com/kata/59557b2a6e595316ab000046)

Convert a hash into an array. Nothing more, Nothing less.

    {name: 'Jeremy', age: 24, role: 'Software Engineer'}

should be converted into

    [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

Good Luck!

<details><summary>My Solution</summary>

```js
function convertHashToArray(hash) {
  const result = []
  const keys = Object.keys(hash)

  for (let i = 0; i < keys.length; i++) {
    result.push([keys[i], hash[keys[i]]])
  }

  return result
}
```

</details>
