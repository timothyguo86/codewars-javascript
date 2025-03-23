# [Angular date formatter](https://www.codewars.com/kata/56d2eada54d686d034000516)

Angular provides a filter to correctly display the dates.

For this kata, we will only take into consideration the date and the format (and let the timezone aside).

[Here is the official documentation about the filter](https://docs.angularjs.org/api/ng/filter/date)

We simplify the possible representations to the following:

- **yyyy**: 4 digit representation of a year, padded (1970-9999)
- **yy**: 2 digit representation of a year, padded (00-99)
- **MM**: Month in a year, padded (01-12)
- **M**: Month in a year (1-12)
- **dd**: Day in a month, padded (01-31)
- **d**: Day in a month (1-31)
- **HH**: Hour in a day, padded (00-23)
- **H**: Hour in a day (0-23)
- **mm**: Minute in hour, padded (00-59)
- **m**: Minute in hour (0-59)
- **ss**: Second in minute, padded (00-59)
- **s**: Second in minute (0-59)

The function `dateFilter` should take two arguments: `date` and `format`.

- `date` can be the `Date` object, a number, or a String (convertible to a number).
- `format` is the format of the output. Here are some examples:

```js
"HH:mm"; // Can return something like '12:04'
"dd/MM/yyyy"; // Can return something like '01/02/1995'
"d/M/yy H%m"; // Can return something like '1/31/14 1%59'
```

Where there is an odd number of letters, parse the longest first then the remaining if needed. For example, `yyy` should
be parsed as `[yy]y`, `ddd` should be parsed as `[dd][d]`.

When there are more than 2 of MdHms, for example, `dddd` it should be parsed as `[dd][dd]`.

---

<details><summary>My Solution</summary>

```js
function dateFilter(date, format) {
  // Check the input type and convert to Date object if necessary
  let dateObj;
  if (typeof date === "string" || typeof date === "number") {
    dateObj = new Date(Number(date));
  } else if (date instanceof Date) {
    dateObj = new Date(date.getTime());
  }
  // Create an object to store the date components
  const dateMap = {
    y: dateObj.getFullYear(),
    M: dateObj.getMonth() + 1,
    d: dateObj.getDate(),
    H: dateObj.getHours(),
    m: dateObj.getMinutes(),
    s: dateObj.getSeconds(),
  };
  // Function to pad a number with leading zeros
  const padNumber = (num, length) => {
    return num.toString().padStart(length, "0");
  };
  // Create an object to store the replacements
  const replacements = {
    yyyy: padNumber(dateMap.y, 4),
    yy: padNumber(dateMap.y % 100, 2),
    MM: padNumber(dateMap.M, 2),
    M: dateMap.M,
    dd: padNumber(dateMap.d, 2),
    d: dateMap.d,
    HH: padNumber(dateMap.H, 2),
    H: dateMap.H,
    mm: padNumber(dateMap.m, 2),
    m: dateMap.m,
    ss: padNumber(dateMap.s, 2),
    s: dateMap.s,
  };
  // Create an array of format specifiers to replace
  const formatSpecifiers = [
    "yyyy",
    "yy",
    "MM",
    "M",
    "dd",
    "d",
    "HH",
    "H",
    "mm",
    "m",
    "ss",
    "s",
  ];
  // Sort the format specifiers by length to parse the longest first
  formatSpecifiers.sort((a, b) => b.length - a.length);
  // Replace the format specifiers with the date components
  for (const specifier of formatSpecifiers) {
    format = format.replace(
      new RegExp(specifier, "g"),
      replacements[specifier],
    );
  }

  return format;
}
```

</details>
