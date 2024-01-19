# [Sum Strings as Numbers](https://www.codewars.com/kata/5324945e2ece5e1f32000370)

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

```js
sumStrings('1', '2') // => '3'
```

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

---

<details><summary>My Solution</summary>

```js
function sumStrings(a, b) {
  let temp = ''
  let str = ''
  let next = 0

  a = a.replace(/^0+/, '')
  b = b.replace(/^0+/, '')

  if (a.length > b.length) b = [a, (a = b)][0]

  while (a.length < b.length) {
    a = '0' + a
  }

  for (var i = a.length - 1; i >= 0; i--) {
    temp =
      parseInt(a.substring(i, i + 1)) + parseInt(b.substring(i, i + 1)) + next
    str = (temp % 10).toString() + str
    next = temp <= 9 ? 0 : 1
  }

  if (next === 1) str = next + str

  return str
}
```

</details>
