# [Tortoise racing](https://www.codewars.com/kata/55e2adece53b4cdcb900006c)

### Description:

Two tortoises named _A_ and _B_ must run a race. _A_ starts with an average speed of `720 feet per hour`. Young _B_
knows she runs faster than _A_, and furthermore has not finished her cabbage.
When she starts, at last, she can see that _A_ has a `70 feet lead` but _B_'s speed is `850 feet per hour`.
How long will it take _B_ to catch _A_?

More generally:
given two speeds `v1` (_A_'s speed, integer > 0) and `v2` (_B_'s speed, integer > 0) and a lead `g` (integer > 0)
how long will it take _B_ to catch _A_?

The result will be an array `[hour, min, sec]` which is the time needed in hours, minutes and seconds (round down to the
nearest second)
or a string in some languages.

If `v1 >= v2` then return `nil`, `nothing`, `null`, `None` or `{-1, -1, -1}` for C++, C, Go, Nim, Pascal, COBOL, Erlang,
`[-1, -1, -1]` for Perl, `[]` for Kotlin or "-1 -1 -1" for others.

#### Examples:

(form of the result depends on the language)

```
race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
```

#### Note:

- See other examples in "Your test cases".
- In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing
  whitespace: you can use dynamically allocated character strings.

**Hints for people who don't know how to convert to hours, minutes, seconds:**

- Tortoises don't care about fractions of seconds
- Think of calculation by hand using only integers (in your code use or simulate integer division)
- or Google: "convert decimal time to hours minutes seconds"

---

<details><summary>My Solution</summary>

```js
function race(v1, v2, g) {
  if (v1 >= v2) return null; // If the first tortoise is faster than or equal to the second tortoise, return null

  // Calculate the time needed for the second tortoise to catch the first in seconds
  let time = (g / (v2 - v1)) * 3600;

  // Calculate the hour, minute, and second components
  let hour = Math.floor(time / 3600);
  let min = Math.floor((time % 3600) / 60);
  let sec = Math.floor(time % 60);

  // Return the time needed in [hour, min, sec] format
  return [hour, min, sec];
}
```

</details>
