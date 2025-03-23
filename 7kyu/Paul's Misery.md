# [Paul's Misery](https://www.codewars.com/kata/57ee31c5e77282c24d000024)

Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to
lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

    kata = 5
    Petes kata = 10
    life = 0
    eating = 1

The Misery Score is the total points gained from the array. Once you have the total, return as follows:

    < 40 = 'Super happy!'
    < 70 >= 40 = 'Happy!'
    < 100 >= 70 = 'Sad!'
    > 100 = 'Miserable!'

---

<details><summary>My Solution</summary>

```js
function paul(x) {
  const scoreDict = {
    kata: 5,
    "Petes kata": 10,
    life: 0,
    eating: 1,
  };
  const total = x.reduce((t, c) => (t += scoreDict[c]), 0);
  if (total < 40) return "Super happy!";
  else if (total < 70) return "Happy!";
  else if (total < 100) return "Sad!";
  else return "Miserable!";
}
```

</details>
