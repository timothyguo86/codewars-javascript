# [The Office IV - Find a Meeting Room](https://www.codewars.com/kata/57f604a21bd4fe771b00009c)

Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to
have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the **first** empty one
and return its index (N.B. There may be more than one empty room in some test cases).

    'X' --> busy
    'O' --> empty

If all rooms are busy, return `"None available!"`

More in this series:

[The Office I - Outed](https://www.codewars.com/kata/the-office-i-outed)  
[The Office II - Boredeom Score](https://www.codewars.com/kata/the-office-ii-boredom-score)  
[The Office III - Broken Photocopier](https://www.codewars.com/kata/the-office-iii-broken-photocopier)  
[The Office V - Find a Chair](https://www.codewars.com/kata/the-office-v-find-a-chair)

---

<details><summary>My Solution</summary>

```js
function meeting(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'O') {
      return i
    }
  }
  return 'None available!'
}
```

</details>
