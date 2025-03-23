# [Correct the time-string](https://www.codewars.com/kata/57873ab5e55533a2890000c7)

A new task for you!

- You have to create a method, that corrects a given time string.
- There was a problem in addition, so many of the time strings are broken.
- Time is formatted using the 24-hour clock, so from `00:00:00` to `23:59:59`.

## Examples

    "09:10:01" -> "09:10:01"
    "11:70:10" -> "12:10:10"
    "19:99:99" -> "20:40:39"
    "24:01:01" -> "00:01:01"

If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is
invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

---

<details><summary>My Solution</summary>

```js
function timeCorrect(timestring) {
  if (!timestring) return timestring;
  if (timestring.match(/\d{2}:\d{2}:\d{2}/)) {
    let [h, m, s] = timestring.split(":").map(Number);

    m = m + Math.floor(s / 60);
    h = h + Math.floor(m / 60);

    let newS = (s % 60).toString().padStart(2, "0");
    let newM = (m % 60).toString().padStart(2, "0");
    let newH = (h % 24).toString().padStart(2, "0");

    return `${newH}:${newM}:${newS}`;
  }

  return null;
}
```

</details>
