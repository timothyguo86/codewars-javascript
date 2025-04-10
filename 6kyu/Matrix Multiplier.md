# [Matrix Multiplier](https://www.codewars.com/kata/573248f48e531896770001f9)

In mathematics, a [matrix](https://en.wikipedia.org/wiki/Matrix_%28mathematics%29) (plural matrices) is a rectangular
array of numbers. Matrices have many applications in programming,
from [performing transformations in 2D space](https://www.mathplanet.com/education/geometry/transformations/transformation-using-matrices)
to [machine learning](https://videolectures.net/icml09_dhillon_itmcml/).

One of the most useful operations to perform on matrices
is [matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication), which takes a pair of matrices and
produces another matrix – known as the dot product. Multiplying matrices is very different to multiplying real numbers,
and follows its own set of rules.

Unlike multiplying real numbers, multiplying matrices is non-commutative: in other words, multiplying matrix `a` by
matrix `b` will not give the same result as multiplying matrix `b` by matrix a.

Additionally, not all pairs of matrix can be multiplied. For two matrices to be multipliable, the number of columns in
matrix a must match the number of rows in matrix `b`.

There are many introductions to matrix multiplication online, including
at [Khan Academy](https://www.khanacademy.org/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/v/matrix-multiplication-intro),
and in the [classic MIT lecture series by Herbert Gross](https://www.youtube.com/watch?v=MfN1lqArwAg).

To complete this kata, write a function that takes two matrices - `a` and `b` - and returns the dot product of those
matrices. If the matrices cannot be multiplied, return `null/None/Nothing` or similar.

Each matrix will be represented by a two-dimensional list (a list of lists). Each inner list will contain one or more
numbers, representing a row in the matrix.

For example, the following matrix:

```
|1 2|
|3 4|
```

Would be represented as:

```
[[1, 2], [3, 4]]
```

It can be assumed that all lists will be valid matrices, composed of lists with equal numbers of elements, and which
contain only numbers. The numbers may include integers and/or decimal points.

---

<details><summary>My Solution</summary>

```js
const getMatrixProduct = (a, b) => {
  // Check if matrices can be multiplied
  if (a[0].length !== b.length) return null;

  // Initialize a result matrix with the same number of rows as matrix 'a' and the same number of columns as matrix 'b'
  return a.map((rowA) =>
    // For each row in matrix 'a', map over each column in matrix 'b'
    b[0].map((_, colIdx) =>
      // Calculate the dot product of the current row from matrix 'a' and the current column from matrix 'b'
      rowA.reduce((sum, valueA, i) => sum + valueA * b[i][colIdx], 0),
    ),
  );
};
```

</details>
