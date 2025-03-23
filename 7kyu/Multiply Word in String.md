# [Multiply Word in String](https://www.codewars.com/kata/5ace2d9f307eb29430000092)

1. You are to write a function that takes a string as its first parameter. This string will be a string of words.
2. You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the
   given string. The first word would be represented by 0.
3. Once you have the located string you are finally going to multiply by it the third provided parameter, which will
   also be an integer. You are additionally required to add a hyphen in between each word.

Example

    modifyMultiply ("This is a string", 3, 5)

    Should return

    ``` "string-string-string-string-string" ```

    Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be   repeated 5 times.

    Simple. Good luck.

---

<details><summary>My Solution</summary>

```js
function modifyMultiply(str, loc, num) {
  return (str.split(" ")[loc] + "-").repeat(num).slice(0, -1);
}
```

</details>
