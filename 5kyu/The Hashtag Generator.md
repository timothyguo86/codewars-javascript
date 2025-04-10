# [The Hashtag Generator](https://www.codewars.com/kata/52449b062fb80683ec000024)

The marketing team is spending way too much time typing in hashtags.  
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (`#`).
- All words must have their first letter capitalized.
- If the final result is longer than 140 characters, it must return `false`.
- If the input or the result is an empty string, it must return `false`.

## Examples

```
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```

---

<details><summary>My Solution</summary>

```js
function generateHashtag(str) {
  if (!str.trim()) return false;

  let result = "";

  str
    .trim()
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
    .split(" ")
    .forEach((word) => {
      result += word[0].toUpperCase() + word.slice(1);
    });

  if (("#" + result).length > 140) return false;

  return "#" + result;
}
```

</details>
