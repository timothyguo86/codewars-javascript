# [Decipher this!](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

- the second and the last letter is switched (e.g. `Hello` becomes `Holle`)
- the first letter is replaced by its character code (e.g. `H` becomes `72`)

- there are no special characters used, only letters and spaces
- words are separated by a single space
- there are no leading or trailing spaces

Examples

    '72olle 103doo 100ya' --> 'Hello good day'
    '82yade 115te 103o'   --> 'Ready set go'

---

<details><summary>My Solution</summary>

```js
function decipherThis(str) {
  return str
    .split(" ")
    .map((v) => {
      v = v.replace(/[0-9]+/g, (m) => String.fromCharCode(m));
      if (v.length < 3) return v;
      else return v.slice(0, 1) + v[v.length - 1] + v.slice(2, -1) + v[1];
    })
    .join(" ");
}
```

</details>
