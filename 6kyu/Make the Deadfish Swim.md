# [Make the Deadfish Swim](https://www.codewars.com/kata/51e0007c1f9378fa810002a9)

Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:

- `i`: Increment the value
- `d`: Decrement the value
- `s`: Square the value
- `o`: Output the value to a result array

All other instructions are no-ops and have no effect.

## Examples

Program `"iiisdoso"` should return numbers `[8, 64]`.  
Program `"iiisdosodddddiso"` should return numbers `[8, 64, 3600]`.

---

<details><summary>My Solution</summary>

```js
function parse(data) {
  const output = [];
  let num = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") num++;
    if (data[i] === "d") num--;
    if (data[i] === "s") num = num ** 2;
    if (data[i] === "o") output.push(num);
  }

  return output;
}
```

</details>
