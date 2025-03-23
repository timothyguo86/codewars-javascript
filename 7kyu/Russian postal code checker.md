# [Russian postal code checker](https://www.codewars.com/kata/552e45cc30b0dbd01100001a)

You should write a simple function that takes string as input and checks if it is a valid Russian postal code, returning
`true` or `false`.

A valid postcode should be 6 digits with no white spaces, letters or other symbols. Empty string should also return
false.

Please also keep in mind that a valid post code **cannot start with** `0, 5, 7, 8 or 9`

## Examples

Valid postcodes:

- 198328
- 310003
- 424000

Invalid postcodes:

- 056879
- 12A483
- 1@63
- 111

---

<details><summary>My Solution</summary>

```js
function zipvalidate(postcode) {
  let regext = new RegExp(/^[1,2,3,4,6][0-9]{5}$/)
  return regext.test(postcode)
}
```

</details>
