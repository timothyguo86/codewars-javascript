# [Roman Numerals Decoder](https://www.codewars.com/kata/51b6249c4612257ac0000005)

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You
don't need to validate the form of the Roman numeral.

[Modern Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals#Standard_form) are written by expressing each
decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is
rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral
for 1666, "MDCLXVI", uses each letter in descending order.

## Example:

```
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      ->  400
"XC"      ->   90
"XL"      ->   40
"I"       ->    1
```

## Help:

```
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
```

_Courtesy of rosettacode.org_

---

<details><summary>My Solution</summary>

```js
function solution(roman) {
  let result = 0;
  const romanToNum = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  for (let i = 0; i < roman.length; i++) {
    if (romanToNum[roman[i] + roman[i + 1]]) {
      result += romanToNum[roman[i] + roman[i + 1]];
      i++;
    } else {
      result += romanToNum[roman[i]];
    }
  }

  return result;
}
```

</details>
