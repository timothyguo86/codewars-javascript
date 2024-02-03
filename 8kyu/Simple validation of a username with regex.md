# [Simple validation of a username with regex](https://www.codewars.com/kata/515e271a311df0350d00000f)

Write a simple regex to validate a username. Allowed characters are:

- lowercase letters,
- numbers,
- underscore

Length should be between 4 and 16 characters (both included).

---

<details><summary>My Solution</summary>

```js
function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/g.test(username)
}
```

</details>
