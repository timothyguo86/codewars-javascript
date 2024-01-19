![alt rank](https://www.codewars.com/users/TimothyGuo/badges/large)

# Codewars Solutions

This is a collection of [my codewars](https://www.codewars.com/users/TimothyGuo) solutions.

## 57. [Get the Middle Character](https://www.codewars.com/kata/56747fd5cb988479af000028)

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

### Examples:

```
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
```

### Input

A word (string) of length `0 < str < 1000` (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

### Output

The middle character(s) of the word represented as a string.

<details><summary>My Solution</summary>

```js
const getMiddle = s => {
  return s.slice(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1)
}
```

</details>

---

**[⬆ Back to Top](#codewars-solutions)**

## 58. [Sum Strings as Numbers](https://www.codewars.com/kata/5324945e2ece5e1f32000370)

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

```js
sumStrings('1', '2') // => '3'
```

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

<details><summary>My Solution</summary>

```js
function sumStrings(a, b) {
  let temp = ''
  let str = ''
  let next = 0

  a = a.replace(/^0+/, '')
  b = b.replace(/^0+/, '')

  if (a.length > b.length) b = [a, (a = b)][0]

  while (a.length < b.length) {
    a = '0' + a
  }

  for (var i = a.length - 1; i >= 0; i--) {
    temp =
      parseInt(a.substring(i, i + 1)) + parseInt(b.substring(i, i + 1)) + next
    str = (temp % 10).toString() + str
    next = temp <= 9 ? 0 : 1
  }

  if (next === 1) str = next + str

  return str
}
```

</details>

---

**[⬆ Back to Top](#codewars-solutions)**

## 59. [Build a pile of Cubes](https://www.codewars.com/kata/5592e3bd57b64d00f3000047)

Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of $`n^3`$ of $`(n - 1)^3`$ and so on until the top which will have a volume of $`1^3`$.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb `(find_nb, find-nb, findNb, ...)` will be an integer m and you have to return the integer n such as $`n^3 + (n - 1)^3 + (n - 2)^3 + ... + 1^3 = m`$ if such a `n` exists or -1 if there is no such `n`.

### Examples:

```
findNb(1071225) --> 45

findNb(91716553919377) --> -1
```

<details><summary>My Solution</summary>

```js
function findNb(m) {
  let n = 0

  while (m > 0) {
    n = n + 1
    m = m - Math.pow(n, 3)
  }

  return m ? -1 : n
}
```

</details>

---

**[⬆ Back to Top](#codewars-solutions)**

## 60. [Autocomplete! Yay!](https://www.codewars.com/kata/5389864ec72ce03383000484)

It's time to create an autocomplete function! Yay!

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

### Example:

```
autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
```

For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

❗Important note:

Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab\*&1cd" should be treated as "abcd".

(Thanks to wthit56 for the suggestion!)

<details><summary>My Solution</summary>

```js
function autocomplete(input, dictionary) {
  let output = []

  input = input.replace(/[^a-zA-Z-]/g, '')

  for (i = 0; i < dictionary.length; i++) {
    if (
      input
        .toUpperCase()
        .localeCompare(
          dictionary[i].substring(0, input.length).toUpperCase()
        ) === 0 &&
      output.length < 5
    ) {
      output.push(dictionary[i])
    }
  }

  return output
}
```

</details>

---

**[⬆ Back to Top](#codewars-solutions)**

## 61. [Sum Arrays](https://www.codewars.com/kata/53dc54212259ed3d4f00071c)

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

### Examples

Input: `[1, 5.2, 4, 0, -1]`
Output: `9.2`

Input: `[]`
Output: `0`

Input: `[-2.398]`
Output: `-2.398`

### Assumptions

- You can assume that you are only given numbers.
- You cannot assume the size of the array.
- You can assume that you do get an array and if the array is empty, return 0.

### What We're Testing

We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.

<details><summary>My Solution</summary>

```js
const sum = numbers =>
  numbers.reduce((a, b) => {
    return (a += b)
  }, 0)
```

</details>

---

**[⬆ Back to Top](#codewars-solutions)**

## 62. [One Line Task: Shortest FizzBuzz](https://www.codewars.com/kata/59dc2c563d09a77d7c000031)

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

<details><summary>My Solution</summary>

```js
fizzBuzz = (a, b, x, y) =>
  [...Array(b - a + 1)].map(
    (v = a++) => (v % x ? '' : 'Fizz') + (v % y ? '' : 'Buzz') || v
  )
```

</details>

---

**[⬆ Back to Top](#codewars-solutions)**

## 63. [Pyramid Array](https://www.codewars.com/kata/515f51d438015969f7000013/javascript)

## DESCRIPTION:

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

```
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
```

## Note:

The subarrays should be filled with `1`s

<details><summary>My Solution</summary>

```js
function pyramid(n) {
  const result = []
  for (let i = 0; i < n; i++) {
    result.push(Array(i + 1).fill(1))
  }
  return result
}
```

</details>

---

**[⬆ Back to Top](#codewars-solutions)**
