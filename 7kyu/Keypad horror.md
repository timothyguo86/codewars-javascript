# [Keypad horror](https://www.codewars.com/kata/5572392fee5b0180480001ae)

Having two standards for a keypad layout is inconvenient!  
Computer keypad's layout:  
![7 8 9 \n
4 5 6 \n
1 2 3 \n
0 \n](./../images/keypad_horror_1.svg)

Cell phone keypad's layout:  
![1 2 3\n
4 5 6\n  
7 8 9\n  
0\n](./../images/keypad_horror_2.svg)

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was
typed on a phone.

Example:  
"789" -> "123"

Notes:  
You get a string with numbers only

---

<details><summary>My Solution</summary>

```js
function computerToPhone(numbers) {
  const keypadDic = {
    7: 1,
    8: 2,
    9: 3,
    4: 4,
    5: 5,
    6: 6,
    1: 7,
    2: 8,
    3: 9,
    0: 0,
  };

  return numbers
    ? numbers
        .split("")
        .map((v) => keypadDic[v])
        .join("")
    : "";
}
```

</details>
