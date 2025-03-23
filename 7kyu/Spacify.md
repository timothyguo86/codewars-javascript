# [Spacify](https://www.codewars.com/kata/57f8ee485cae443c4d000127)

Modify the spacify function so that it returns the given string with spaces inserted between each character.

```js
spacify("hello world"); // returns "h e l l o   w o r l d"
```

---

<details><summary>My Solution</summary>

```js
function spacify(str) {
  return [...str].join(" ");
}
```

</details>
