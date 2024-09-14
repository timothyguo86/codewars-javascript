# [Initialize my name](https://www.codewars.com/kata/5768a693a3205e1cc100071f)

Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

## Examples

    'Jack Ryan'                   => 'Jack Ryan'
    'Lois Mary Lane'              => 'Lois M. Lane'
    'Dimitri'                     => 'Dimitri'
    'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

---

<details><summary>My Solution</summary>

```js
function initializeNames(name) {
  let names = name.split(' ')
  if (names.length < 3) {
    return name
  } else {
    return names
      .map((x, i) => {
        if (i === 0 || i === names.length - 1) return x
        else return `${x[0]}.`
      })
      .join(' ')
  }
}
```

</details>
