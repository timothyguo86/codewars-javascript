# [What century is it?](https://www.codewars.com/kata/52fb87703c1351ebd200081f)

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

### Examples

    "1999" --> "20th"
    "2011" --> "21st"
    "2154" --> "22nd"
    "2259" --> "23rd"
    "1124" --> "12th"
    "2000" --> "20th"

---

<details><summary>My Solution</summary>

```js
function whatCentury(year) {
  let century = Math.ceil(year / 100).toString()

  if (century === '11' || century === '12' || century === '13') return century + 'th'

  switch (century[century.length - 1]) {
    case '1':
      return century + 'st'
    case '2':
      return century + 'nd'
    case '3':
      return century + 'rd'
    default:
      return century + 'th'
  }
}
```

</details>
