# [Rock Paper Scissors!](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)

Let's play! You have to return which player won! In case of a draw return `Draw!`.

Examples(Input1, Input2 --> Output):

```
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
```

![rock paper scissors](/images/rock-paper-scissors.png)

---

<details><summary>My Solution</summary>

```js
const rps = (p1, p2) => {
  // Check for a draw
  if (p1 === p2) return 'Draw!'

  // Define winning conditions using a map
  const map = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  }

  // Determine the winner based on the map and player choices
  return map[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!'
}
```

</details>
