# [Grasshopper - Grade book](https://www.codewars.com/kata/55cbd4ba903825f7970000f5)

### Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

| Numerical Score    | Letter Grade |
| ------------------ | ------------ |
| 90 <= score <= 100 | 'A'          |
| 80 <= score <= 90  | 'B'          |
| 70 <= score <= 80  | 'C'          |
| 60 <= score <= 70  | 'D'          |

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

---

<details><summary>My Solution</summary>

```js
function getGrade(s1, s2, s3) {
  // Calculate the average score
  let average = (s1 + s2 + s3) / 3

  // Determine the grade based on the average score
  if (average >= 90) return 'A'
  else if (average >= 80) return 'B'
  else if (average >= 70) return 'C'
  else if (average >= 60) return 'D'
  else return 'F'
}
```

</details>
