# [Decreasing Inputs](https://www.codewars.com/kata/555de49a04b7d1c13c00000e)

This kata is all about adding numbers.

You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

      add(3,4,6);
      /*
      returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
      */

Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.

Example

      add(); //=> 0
      add(1,2,3); //=> 3
      add(1,4,-6,20); //=> 6

Check my another kata
here!! [http://www.codewars.com/kata/555b73a81a6285b6ce000047](http://www.codewars.com/kata/555b73a81a6285b6ce000047)

---

<details><summary>My Solution</summary>

```js
function add() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i] / (i + 1);
  }

  return Math.round(result);
}
```

</details>
