# [Return a string's even characters.](https://www.codewars.com/kata/566044325f8fddc1c000002c)

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string
is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

    "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
    "a"             --> "invalid string"

---

<details><summary>My Solution</summary>

```js
function evenChars(string) {
  if (string.length > 100 || string.length < 2) return "invalid string";
  return string.split("").filter((_, i) => i % 2);
}
```

</details>
