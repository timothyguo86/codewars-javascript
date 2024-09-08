# [All Inclusive?](https://www.codewars.com/kata/5700c9acc1555755be00027e)

Input:

- a string `strng`
- an array of strings `arr`

Output of function `contain_all_rots(strng, arr) (or containAllRots or contain-all-rots)`:

- a boolean `true` if all rotations of `strng` are included in `arr`
- `false` otherwise

#### Examples:

    contain_all_rots(
      "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

    contain_all_rots(
      "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

#### Note:

Though not correct in a mathematical sense

- we will consider that there are no rotations of `strng == ""`
- and for any array `arr`: `contain_all_rots("", arr) --> true`

## Ref: [https://en.wikipedia.org/wiki/String\_(computer_science)#Rotations](<https://en.wikipedia.org/wiki/String_(computer_science)#Rotations>)

<details><summary>My Solution</summary>

```js
function containAllRots(strng, arr) {
  if (strng === '') return true
  for (let i = 0; i < strng.length; i++) {
    if (!arr.includes(strng)) return false
    strng = `${strng.slice(1)}${strng[0]}`
  }

  return true
}
```

</details>
