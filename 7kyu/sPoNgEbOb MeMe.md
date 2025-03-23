# [sPoNgEbOb MeMe](https://www.codewars.com/kata/5982619d2671576e90000017)

Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

!["Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme](/images/sPoNgEbOb_MeMe.jpg)

You need to create a function that converts the input into this format, with the output being the same string expect
there is a pattern of uppercase and lowercase letters.

Example:

    input:  "stop Making spongebob Memes!"
    output: "StOp mAkInG SpOnGeBoB MeMeS!"

---

<details><summary>My Solution</summary>

```js
function spongeMeme(sentence) {
  return sentence
    .split('')
    .map((char, i) => (i % 2 ? char.toLowerCase() : char.toUpperCase()))
    .join('')
}
```

</details>
