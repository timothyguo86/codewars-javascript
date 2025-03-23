# [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c)

The goal of this exercise is to convert a string to a new string where each character in the new string is `(` if that
character appears only once in the original string, or `)` if that character appears more than once in the original
string. Ignore capitalization when determining if a character is a duplicate.

### Examples

```
"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("
```

### Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX",
the "XXX" is the expected result, not the input!

---

<details><summary>My Solution</summary>

```js
function duplicateEncode(word) {
  const lowerCaseWord = word.toLowerCase()
  const wordMap = {}

  // Count the occurrence of each character in the word
  Array.from(lowerCaseWord).map(char => {
    return (wordMap[char] = wordMap[char] ? wordMap[char] + 1 : 1)
  })

  // Map each character in the lowercase word to '(' if it appears only once, or ')' if it appears more than once
  return Array.from(lowerCaseWord)
    .map(char => (wordMap[char] > 1 ? ')' : '('))
    .join('')
}
```

</details>
