# [FString incrementer](https://www.codewars.com/kata/54a91a4883a7de5d7800009c)

Your job is to write a function which increments a string, to create a new string.

- If the string already ends with a number, the number should be incremented by 1.
- If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

`foo -> foo1`

`foobar23 -> foobar24`

`foo0042 -> foo0043`

`foo9 -> foo10`

`foo099 -> foo100`

_Attention: If the number has leading zeros the amount of digits should be considered._

---

<details><summary>My Solution</summary>

```js
function incrementString(strng) {
  const endNumMatch = strng.match(/[0-9]+$/)
  let endStr = '1'
  if (endNumMatch) {
    const endNum = endNumMatch[0]
    const digits = endNum.length
    endStr = (+endNum + 1).toString().padStart(digits, '0')

    return strng.slice(0, -digits) + endStr
  }

  return strng + endStr
}
```

</details>
