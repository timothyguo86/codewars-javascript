# [Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe](https://www.codewars.com/kata/582746fa14b3892727000c4f)

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

---

<details><summary>My Solution</summary>

```js
function countDevelopers(list) {
  return list.filter(person => person.continent === 'Europe' && person.language === 'JavaScript').length
}
```

</details>
