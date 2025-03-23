# [Anonymous Returns.](https://www.codewars.com/kata/53d4eec01f1a9b3020000786)

When a function is called by itself it is bound to the global context; the `this` variable of the function will be bound
to the global object.

When the `getNameFunc` function is called on the `alpha` object the value of the `name` variable outside of the object
is returned: `"The Window"`.

We do not want this, we want the value of the `name` property inside the `alpha` object to be returned.

Fix `getNameFunc` so the right value is returned.

For more information: [Binding](http://alistapart.com/article/getoutbindingsituations)

---

<details><summary>My Solution</summary>

```js
const name = "The Window";

let alpha = {
  name: "My Alpha",

  getNameFunc: function () {
    return () => this.name;
  },
};
```

</details>
