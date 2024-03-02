# [Greed](https://www.codewars.com/kata/57fa92b25c9910e7bc0001df)

In my "getQuotes" function, I am trying to extract only the quotes from a string.

### Example

```js
getQuotes('"example quote #1" some text "example quote #2"')
// should return ["\"example quote #1\"","\"example quote #2\""]
```

However, my test results are not as expected. can you find out what I did wrong?

---

<details><summary>My Solution</summary>

```js
var reg = /".+?"/g
function getQuotes(string) {
  return string.match(reg)
}
```

</details>
