# [Replace every nth](https://www.codewars.com/kata/57fcaed83206fb15fd00027a)

## Task

Write a method, that replaces every nth char _oldValue_ with char _newValue_.

## Inputs

- `text`: the string to modify
- `n`: change the target letter every `n`th occurrencies
- `old_value` (or similar): the targetted character
- `new_value` (or similar): the character to use as replacement

Note for untyped languages: all inputs are always valid and of their expected type.

## Rules

- Your method has to be case sensitive!
- If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.

## Example:

    n:         2
    old_value: 'a'
    new_value: 'o'
    "Vader said: No, I am your father!"
      1     2          3        4       -> 2nd and 4th occurence are replaced
    "Vader soid: No, I am your fother!"

As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!

---

<details><summary>My Solution</summary>

```js
function replaceNth(text, n, oldValue, newValue) {
  if (n < 1) return text
  let matchCount = 0
  return text.replace(new RegExp(oldValue, 'g'), match => {
    matchCount++
    return matchCount % n === 0 ? newValue : match
  })
}
```

</details>
