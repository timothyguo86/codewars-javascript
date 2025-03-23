# [Dangerous Dates](https://www.codewars.com/kata/53a257d83cacabb1fd0007d3)

Fix this function so that it correctly outputs a list of the next five days (starting after the input date). Each date
should be in the format M/D/YYYY. i.e. March 12th 2013 would be 3/12/2013.

Example output: "3/14/2013, 3/15/2013, 3/16/2013, 3/17/2013, 3/18/2013"

There's a hard way to do this and there's a right way.

---

<details><summary>My Solution</summary>

```js
// Function to get the next five days from a given date
var nextFiveDays = function (date) {
  // Array to store the next five days
  const dates = []

  // Loop to calculate the next five days
  for (var i = 1; i < 6; i++) {
    // Calculate the date by adding 24 hours * i to the given date
    let newDate = new Date(Date.parse(date) + 3600000 * 24 * i)
    // Extract day, month, and year from the new date
    let d = newDate.getDate()
    let m = newDate.getMonth() + 1 // Months are zero-based, so add 1
    let y = newDate.getFullYear()
    // Push the formatted date (mm/dd/yyyy) to the dates array
    dates.push(m + '/' + d + '/' + y)
  }

  // Join the dates array elements with a comma and space
  return dates.join(', ')
}
```

</details>
