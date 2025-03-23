# [Number Of Occurrences](https://www.codewars.com/kata/52829c5fe08baf7edc00122b)

Write a function that returns the number of occurrences of an element in an array.

This function will be defined as a property of Array with the help of the method `Object.defineProperty`, which allows
to define a new method **directly** on the object (more info about that you can find
on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)).

### Examples

    var arr = [0, 1, 2, 2, 3];
    arr.numberOfOccurrences(0) === 1;
    arr.numberOfOccurrences(4) === 0;
    arr.numberOfOccurrences(2) === 2;
    arr.numberOfOccurrences(3) === 1;

---

<details><summary>My Solution</summary>

```js
Object.defineProperty(Array.prototype, "numberOfOccurrences", {
  value: function numberOfOccurrences(element) {
    return this.filter((v) => v === element).length;
  },
});
```

</details>
