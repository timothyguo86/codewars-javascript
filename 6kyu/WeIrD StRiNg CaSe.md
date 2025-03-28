# [WeIrD StRiNg CaSe](https://www.codewars.com/kata/52b757663a95b11b3d00062d)

Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper
cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the
zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(`' '`). Spaces will only be present if
there are multiple words. Words will be separated by a single space(`' '`).

### Examples:

```
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
```

---

<details><summary>My Solution</summary>

```js
function toWeirdCase(string) {
  return string
    .split(" ") // Split the input string into an array of words
    .map((word) => {
      return word
        .split("")
        .map((char, index) => {
          // Map each character in a word to uppercase or lowercase based on its index
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        .join(""); // Join the characters back into a word
    })
    .join(" "); // Join the words back into a string
}
```

</details>
