# [Greet Me](https://www.codewars.com/kata/535474308bb336c9980006f2)

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation
point.

Example:

```
"riley" --> "Hello Riley!"
"JACK" --> "Hello Jack!"
```

---

<details><summary>My Solution</summary>

```js
const greet = function (name) {
  return (
    "Hello " +
    name[0].toUpperCase() +
    name.slice(1, name.length).toLowerCase() +
    "!"
  );
};
```

</details>
