# [Tip Calculator](https://www.codewars.com/kata/56598d8076ee7a0759000087)

Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

- Terrible: tip 0%
- Poor: tip 5%
- Good: tip 10%
- Great: tip 15%
- Excellent: tip 20%
  The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

- `"Rating not recognised"` in Javascript, Python and Ruby...
- ...or `null` in Java
- ...or `-1` in C#
  Because you're a nice person, you **always round up** the tip, regardless of the service.

---

<details><summary>My Solution</summary>

```js
function calculateTip(amount: number, rating: string): number | string {
  // Map of ratings to tip percentages
  const tipMap: { [key: string]: number } = {
    Terrible: 0,
    Poor: 0.05,
    Good: 0.1,
    Great: 0.15,
    Excellent: 0.2
  }

  // Convert rating to proper case (e.g., "Good" instead of "good" or "GOOD")
  const cleanedRating = rating[0].toUpperCase() + rating.substring(1).toLowerCase()

  // Check if the rating exists in the tip map and calculate the tip
  if (tipMap.hasOwnProperty(cleanedRating)) {
    return Math.ceil(amount * tipMap[cleanedRating])
  } else {
    return 'Rating not recognized'
  }
}
```

</details>
