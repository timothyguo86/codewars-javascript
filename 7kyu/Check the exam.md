# [Check the exam](https://www.codewars.com/kata/5a3dd29055519e23ec000074)

The first input array is the key to the correct answers to an exam, like `["a", "a", "b", "d"]`. The second one contains
a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving `+4` for each
correct answer, `-1` for each incorrect answer, and `+0` for each blank answer, represented as an empty string (in C the
space character is used).

If the score < 0, return `0`.

For example:

```
| Correct answer      | Student's answer    | Result |
|---------------------|---------------------|--------|
| `["a", "a", "b", "b"]` | `["a", "c", "b", "d"]` | 6      |
| `["a", "a", "c", "b"]` | `["a", "a", "b", "" ]` | 7      |
| `["a", "a", "b", "c"]` | `["a", "a", "b", "c"]` | 16     |
| `["b", "c", "b", "a"]` | `["", "a", "a", "c"]`  | 0      |
```

---

<details><summary>My Solution</summary>

```js
function checkExam(array1, array2) {
  return Math.max(
    0,
    array2.reduce((acc, cur, i) => {
      if (cur === "") return acc;
      if (cur === array1[i]) return (acc += 4);
      else return (acc -= 1);
    }, 0),
  );
}
```

</details>
