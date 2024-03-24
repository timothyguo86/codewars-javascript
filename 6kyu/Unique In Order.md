# [Unique In Order](https://www.codewars.com/kata/54e6533c92449cc251001667)

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

```
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```

---

<details><summary>My Solution</summary>

```js
var uniqueInOrder = function(iterable) {
    // Initialize an empty array to store the result
    let result = [];
    // Iterate over the iterable
    for(let i = 0; i < iterable.length; i++) {
        // If the current item is not the same as the previous item
        if(iterable[i] !== iterable[i-1]) {
            // Push the current item to the result array
            result.push(iterable[i]);
        }
    }
    // Return the result array
    return result;
}
```

</details>
