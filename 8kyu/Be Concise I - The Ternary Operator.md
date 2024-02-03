# [Be Concise I - The Ternary Operator](https://www.codewars.com/kata/5583090cbe83f4fd8c000051)

You are given a function `describeAge / describe_age` that takes a parameter `age` (which will always be a <strong>positive integer</strong> ) and does the following:

1. If the age is `12` or lower, it return `"You're a(n) kid"`
2. If the age is anything between `13` and `17` (inclusive), it return `"You're a(n) teenager"`
3. If the age is anything between `18` and `64` (inclusive), it return `"You're a(n) adult"`
4. If the age is `65` or above, it return `"You're a(n) elderly"`

Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of <strong>137</strong>.

I'll give you a few hints:

1. The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
2. Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
3. Write everything in one line, \n and other whitespaces counts.

<strong>Whatever you do, do not change what the function does.strong> Good luck :)</

---

<details><summary>My Solution</summary>

```js
// 112 characters
const describeAge = a => `You're a(n) ${a <= 12 ? 'kid' : a <= 17 ? 'teenager' : a <= 64 ? 'adult' : 'elderly'}`
```

</details>
