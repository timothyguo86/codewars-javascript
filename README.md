![alt rank](https://www.codewars.com/users/TimothyGuo/badges/large)

# Codewars Solutions

This is a collection of my codewars solutions. Feel free to visit my [codewars profile](https://www.codewars.com/users/TimothyGuo).


## 1. [How good are you really?](https://www.codewars.com/kata/5601409514fc93442500010b)

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return `True` if you're better, else `False`!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

<details><summary>My Solution</summary>

```js
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 2. [Remove First and Last Character](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

<details><summary>My Solution</summary>

```js
function removeChar(str){
 return str.slice(1, -1)
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 3. [Remove String Spaces](https://www.codewars.com/kata/57eae20f5500ad98e50002c5)

Write a function that removes the spaces from the string, then return the resultant string.

<details><summary>My Solution</summary>

```js
function noSpace(x){
  return x.replace(/ /g, '')
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 4. [Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f)

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for `[1, 2, 2]` it should return `9`

<details><summary>My Solution</summary>

```js
function squareSum(numbers){
  return numbers.reduce((sum, n) => {
    return sum += n**2
  }, 0)
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 5. [Rock Paper Scissors!](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)

Let's play! You have to return which player won! In case of a draw return `Draw`!.

Examples(Input1, Input2 --> Output):
```
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
```
![rock paper scissors](images/rock-paper-scissors.png)

<details><summary>My Solution</summary>

```js
const rps = (p1, p2) => {
  if(p1 === p2) return "Draw!"
  
  const map = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  }
  
  return map[p1] === p2 ? 'Player 1 won!': 'Player 2 won!'
  
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 6. [Sum Arrays](https://www.codewars.com/kata/53dc54212259ed3d4f00071c)

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
// Sum Numbers
function sum (numbers) {
  "use strict";

   return numbers.reduce((a, b) => {
     return a += b
   }, 0)
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 7. [Beginner Series #1 School Paperwork](https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd)

Your classmates asked you to copy some paperwork for them. You know that there are `n` classmates and the paperwork has `m` pages.

Your task is to calculate how many blank pages do you need. If `n < 0` or `m < 0` return `0`.

### Example:
```
n= 5, m=5: 25
n=-5, m=5:  0
```
<details><summary>My Solution</summary>

```js
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 8. [Reversed sequence](https://www.codewars.com/kata/5a00e05cc374cb34d100000d)

Build a function that returns an array of integers from n to 1 where n>0.

Example :` n=5` --> `[5,4,3,2,1]`
<details><summary>My Solution</summary>

```js
const reverseSeq = n => {
  let seq = []
  
  while(n > 0) {
    seq.push(n)
    n--
  }
  return seq;
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 9. [Total amount of points](https://www.codewars.com/kata/5bb904724c47249b10000131)

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format `"x:y"`, where `x` is our team's score and `y` is our opponents score.

For example: `["3:1", "2:2", "0:1", ...]`

Points are awarded for each match as follows:

- if x > y: 3 points (win)
- if x < y: 0 points (loss)
- if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (`x`) got in the championship by the rules given above.

Notes:

- our team always plays 10 matches in the championship
- 0 <= x <= 4
- 0 <= y <= 4

<details><summary>My Solution</summary>

```js
function points(games) {
  return games.reduce((sum, game) => {
    if (game[0] > game[2]) {
      sum += 3
    } else if (game[0] === game[2]) {
      sum += 1
    }
    
    return sum
  }, 0)
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 10. [Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)

Create a function that takes an integer as an argument and returns `"Even"` for even numbers or `"Odd"` for odd numbers.

<details><summary>My Solution</summary>

```js
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" :"Odd"
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 11. [Exes and Ohs](https://www.codewars.com/kata/55908aad6620c066bc00002a)

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```

<details><summary>My Solution</summary>

```js
function XO(str) {
  return (
    (str.match(/x/gi) && str.match(/x/gi).length) ===
    (str.match(/o/gi) && str.match(/o/gi).length)
  )
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 12. [Ones and Zeros](https://www.codewars.com/kata/578553c3a1b8d5c40300037c)

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: `[0, 0, 0, 1]` is treated as 0001 which is the binary representation of `1`.

Examples:

```
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
```
However, the arrays can have varying lengths, not just limited to `4`.
<details><summary>My Solution</summary>

```js
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 13. [Return Negative](https://www.codewars.com/kata/55685cd7ad70877c23000102)

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

### Examples
```
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
```
### Notes
- The number can be negative already, in which case no change is required.
- Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

<details><summary>My Solution</summary>

```js
function makeNegative(num) {
  return -Math.abs(num)
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 14. [Will there be enough space?](https://www.codewars.com/kata/5875b200d520904a04000003)

### The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

### Task Overview:
You have to write a function that accepts three parameters:

- `cap` is the amount of people the bus can hold excluding the driver.
- `on` is the number of people on the bus excluding the driver.
- `wait` is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
###Usage Examples:
```
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
```
<details><summary>My Solution</summary>

```js
function enough(cap, on, wait) {
  return (cap - on - wait > 0) ? 0 : on + wait - cap
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 15. [Twice as old](https://www.codewars.com/kata/5875b200d520904a04000003)

Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
<details><summary>My Solution</summary>

```js
function twiceAsOld(d, s) {
  return Math.abs(s * 2- d)
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 16. [Two Sum](https://www.codewars.com/kata/52c31f8e6605bcc646000082)

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

```
twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
```
<details><summary>My Solution</summary>

```js
function twoSum(nums, target) {
  const map = new Map()
  
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i]
    const b = target - a
    
    if (map.has(b)) {
      return [i, map.get(b)]
    } else {
      map.set(a, i)
    }
  }
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**

## 17. [Find the smallest integer in the array](https://www.codewars.com/kata/55a2d7ebe362935a210000b2)

Given an array of integers your solution should find the smallest integer.

For example:

- Given [34, 15, 88, 2] your solution will return 2
- Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.

<details><summary>My Solution</summary>

```js
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**


## 18. [Remove the minimum](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

### Task
Given an array of integers, remove the smallest value. __Do not mutate the original array/list.__ If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

### Examples
```
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
```
<details><summary>My Solution</summary>

```js
function removeSmallest(nums) {
  const newNums = [...nums]
  const min = Math.min(...newNums)

  newNums.splice(newNums.indexOf(min), 1)

  return newNums
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**

## 19. [Welcome](https://www.codewars.com/kata/577ff15ad648a14b780000e7)

Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

### The Task
- Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
- Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

### The Database
```
[ ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]
```

Possible invalid inputs include:

```
IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was suppliedput: [2,2,1,2,1], output = [2,2,2,1]
```

<details><summary>My Solution</summary>

```js
function greet(language) {
	const languagesDB = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  }
  
  return languagesDB[language] || languagesDB['english']
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**

## 20. [Reversed Strings](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

Complete the solution so that it reverses the string passed into it.
```
'world'  =>  'dlrow'
'word'   =>  'drow'
```

<details><summary>My Solution</summary>

```js
function solution(str){
  return [...str].reverse().join('')
}
```
</details>

---

**[⬆ Back to Top](#codewars-solutions)**