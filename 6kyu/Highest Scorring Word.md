# [Highest Scorring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272)

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: `a = 1, b = 2, c = 3` etc.

For example, the score of `abad` is `8` (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

---

<details><summary>My Solution</summary>

```js
function high(sentence) {
  // Create a mapping of characters to their corresponding numerical values.
  const charToNumMap = {};

  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode("a".charCodeAt(0) + i);
    charToNumMap[char] = i + 1;
  }

  // Split the sentence into an array of words.
  const words = sentence.split(" ");

  let highestScore = 0;
  let highestScoreWord = "";

  // Iterate through each word in the sentence.
  words.forEach((word) => {
    // Calculate the score for the current word by summing the numerical values of its characters.
    let currentScore = word.split("").reduce((acc, char) => {
      return acc + charToNumMap[char];
    }, 0);

    // Update the highest score and highest scoring word if the current word has a higher score.
    if (currentScore > highestScore) {
      highestScore = currentScore;
      highestScoreWord = word;
    }
  });

  return highestScoreWord;
}
```

</details>
