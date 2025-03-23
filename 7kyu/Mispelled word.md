# [Mispelled word](https://www.codewars.com/kata/5892595f190ca40ad0000095)

Create a function mispelled(word1, word2):

    mispelled('versed', 'xersed'); // returns true
    mispelled('versed', 'applb'); // returns false
    mispelled('versed', 'v5rsed'); // returns true
    mispelled('1versed', 'versed'); // returns true
    mispelled('versed', 'versed'); // returns true

It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect `true`, the mispelled word will always differ mostly by one character. If the two words are the
same, return `True`.

---

<details><summary>My Solution</summary>

```js
let mispelled = function (word1, word2) {
  if (
    word1.slice(1) === word2 ||
    word1.slice(0, -1) === word2 ||
    word2.slice(1) === word1 ||
    word2.slice(0, -1) === word1
  ) {
    return true;
  }
  if (word1.length === word2.length) {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) diffCount++;
      if (diffCount === 2) return false;
    }
    return true;
  }

  return false;
};
```

</details>
