# [Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The
quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is
irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and
punctuation.

---

<details><summary>My Solution</summary>

```js
function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerCaseString = string.toLowerCase();

  return alphabet.split("").every((char) => lowerCaseString.includes(char));
}
```

</details>
