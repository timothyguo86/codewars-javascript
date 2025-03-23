# [Eliminate the intruders! Bit manipulation](https://www.codewars.com/kata/5a0d38c9697598b67a000041)

# Task

You are given a string representing a number in binary. Your task is to delete all the **unset** bits in this string and
return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:

    function eliminateUnsetBits(number);

## Examples

    eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
    eliminateUnsetBits("111") ->  7
    eliminateUnsetBits("1000000") -> 1
    eliminateUnsetBits("000") -> 0

---

<details><summary>My Solution</summary>

```js
function eliminateUnsetBits(number) {
  return parseInt(number.replace(/0/g, ""), 2) || 0;
}
```

</details>
