# [CamelCase Method](https://www.codewars.com/kata/587731fda577b3d1b0001196)

Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must
have their first letter capitalized and spaces must be removed.

#### Examples (input --> output):

```
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
```

Don't forget to rate this kata! Thanks :)

---

<details><summary>My Solution</summary>

```js
String.prototype.camelCase = function () {
  return this.split(' ')
    .map(word => {
      if (this.length === 0) return ''
      return word[0].toUpperCase() + word.slice(1)
    })
    .join('')
}
```

</details>
