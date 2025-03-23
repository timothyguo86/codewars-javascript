# [Thinkful - String Drills: Areacode extractor](https://www.codewars.com/kata/585a36b445376cbc22000072)

You've got a bunch of textual data with embedded phone numbers. Write a function `area_code()` that finds and returns
just the area code portion of the phone number.

    >>> message = "The supplier's phone number is (555) 867-5309"
    >>> area_code(message)
    '555'

The returned area code should be a string, not a number. Every phone number is formatted like in the example, and the
only non-alphanumeric characters in the string are apostrophes `'` or the punctuation used in the phone number.

---

<details><summary>My Solution</summary>

```js
function areaCode(text) {
  const openBracketIdx = text.indexOf("(");
  const closeBracketIdx = text.indexOf(")");

  return text.slice(openBracketIdx + 1, closeBracketIdx);
}
```

</details>
