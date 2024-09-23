# [Histogram - H1)](https://www.codewars.com/kata/5668e3800636a6cd6a000018)

**Kata in this series**

- [Histogram - H1](https://www.codewars.com/kata/histogram-h1/)
- [Histogram - H2](https://www.codewars.com/kata/histogram-h2/)
- [Histogram - V1](https://www.codewars.com/kata/histogram-v1/)
- [Histogram - V2](https://www.codewars.com/kata/histogram-v2/)

## Background

A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.

Example:

    6|##### 5
    5|
    4|# 1
    3|########## 10
    2|### 3
    1|####### 7

## Task

You will be passed the dice value frequencies, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

## Notes

- There are no trailing spaces on the lines
- All lines (including the last) end with a newline `\n`
- A count is displayed beside each bar except where the count is 0
- The number of rolls may vary but there are never more than 100

---

<details><summary>My Solution</summary>

```js
function histogram(results) {
  let histogram  = ''
  for(let i = results.length - 1; i > 0; i--) {
    histogram += `${i + 1}|` + (results[i] ? )
  }
  let [one, two, three, four, five, six] = results
  return  '6|' + (six ? `${'#'.repeat(six)} ${six}` : '') + '\n' +
          '5|' + (five ? `${'#'.repeat(five)} ${five}` : '') + '\n' +
          '4|' + (four ? `${'#'.repeat(four)} ${four}` : '') + '\n' +
          '3|' + (three ? `${'#'.repeat(three)} ${three}` : '') + '\n' +
          '2|' + (two ? `${'#'.repeat(two)} ${two}` : '') + '\n' +
          '1|' + (one ? `${'#'.repeat(one)} ${one}` : '') + '\n'
}
```

</details>
