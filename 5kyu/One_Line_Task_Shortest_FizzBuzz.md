# [One Line Task: Shortest FizzBuzz](https://www.codewars.com/kata/59dc2c563d09a77d7c000031)

## Task

Create a function that accepts four parameters min, max, x and y and returns an array of numbers from min(inclusive) to max(inclusive).
If the number divisible by x => Fizz
If the number divisible by y => Buzz
If the number divisible by x and y => FizzBuzz
If the number is not divisible by x and y return the number

## Note:

Your solution must be written in one line. code.length < 88 characters.

Advice: if your code length is much longer than the limit, giving up is also a good choice :D

## Example

```
  fizzBuzz(1, 10, 2, 4) => [1, 'Fizz', 3, 'FizzBuzz', 5, 'Fizz', 7, 'FizzBuzz', 9, 'Fizz' ]

  fizzBuzz(20, 35, 5, 8) => ['Fizz', 21, 22, 23, 'Buzz', 'Fizz', 26, 27, 28, 29, 'Fizz', 31, 'Buzz', 33, 34, 'Fizz']
```

---

<details><summary>My Solution</summary>

```js
fizzBuzz = (a, b, x, y) => [...Array(b - a + 1)].map((v = a++) => (v % x ? '' : 'Fizz') + (v % y ? '' : 'Buzz') || v)
```

</details>
