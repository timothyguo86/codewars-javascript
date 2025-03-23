# [The Deaf Rats of Hamelin](https://www.codewars.com/kata/598106cb34e205e074000031)

![](https://i.imgur.com/ta6gv1i.png?1)

---

# Story

The [Pied Piper](https://en.wikipedia.org/wiki/Pied_Piper_of_Hamelin) has been enlisted to play his magical tune and
coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

# Kata Task

How many deaf rats are there?

# Legend

- `P` = The Pied Piper
- `O~` = Rat going left
- `~O` = Rat going right

# Example

- ex1 `~O~O~O~O P` has 0 deaf rats
- ex2 `P O~ O~ ~O O~` has 1 deaf rat
- ex3 `~O~O~O~OP~O~OO~` has 2 deaf rats

---

# Series

- [The deaf rats of Hamelin (2D)](https://www.codewars.com/kata/the-deaf-rats-of-hamelin-2d)

---

<details><summary>My Solution</summary>

```js
const countDeafRats = function (town) {
  let deafMice = 0;

  town
    .replace(/\s/g, "")
    .split("")
    .forEach((v, i) => {
      if (v === "O" && i % 2 === 0) deafMice++;
    });

  return deafMice;
};
```

</details>
