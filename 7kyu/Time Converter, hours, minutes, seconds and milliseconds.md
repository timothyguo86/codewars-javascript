# [Time Converter: hours, minutes, seconds and milliseconds](https://www.codewars.com/kata/56b8b0ae1d36bb86b2000eaa)

Given a time in a time format class, return it without year, month and day.

It should return a string including milliseconds with 3 decimals.

Example:

```js
new Date(2016, 2, 8, 16, 42, 59)
//Should return: '16:42:59,000'
```

---

<details><summary>My Solution</summary>

```js
function convert(time) {
  const hours = time.getHours().toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const seconds = time.getSeconds().toString().padStart(2, '0')
  const milliseconds = time.getMilliseconds().toString().padStart(3, '0')

  return `${hours}:${minutes}:${seconds},${milliseconds}`
}
```

</details>
