# [Dropcaps](https://www.codewars.com/kata/559e5b717dd758a3eb00005a)

DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

\*should work also on Leading and Trailing Spaces and caps.

    "apple"            => "Apple"
    "apple of banana"  => "Apple of Banana"
    "one   space"      => "One   Space"
    "   space WALK   " => "   Space Walk   "

**Note:** you will be provided atleast one word and should take string as input and return string as output.

---

<details><summary>My Solution</summary>

```js
function dropCap(n) {
  return n
    .split(' ')
    .map(v => {
      if (v.length > 2) return v[0].toUpperCase() + v.slice(1).toLowerCase()
      return v
    })
    .join(' ')
}
```

</details>
