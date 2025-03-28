# [Friend or Foe?](https://www.codewars.com/kata/55b42574ff091733d900002f)

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure
he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

```js
friend[("Ryan", "Kieran", "Mark")]`shouldBe`[("Ryan", "Mark")];
```

Note: keep the original order of the names in the output.

---

<details><summary>My Solution</summary>

```js
function friend(friends) {
  // Filter the array to include only names with a length of 4
  return friends.filter((name) => name.length === 4);
}
```

</details>
