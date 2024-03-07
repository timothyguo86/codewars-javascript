# [Find the missing letter](https://www.codewars.com/kata/5839edaa6754d6fec10000a2)

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

### Example:

```
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
```

(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

---

<details><summary>My Solution</summary>

```js
function findMissingLetter(array) {
  // Get the character code of the first element in the array
  const startCharCode = array[0].charCodeAt(0)

  // Loop through character codes from the startCharCode to the character code of the last element in the array
  for (let i = startCharCode; i < array[array.length - 1].charCodeAt(0); i++) {
    // Convert the current character code to its corresponding character and compare it with the array element
    if (String.fromCharCode(i) !== array[i - startCharCode]) {
      // If they don't match, return the missing character
      return String.fromCharCode(i)
    }
  }
}
```

</details>
