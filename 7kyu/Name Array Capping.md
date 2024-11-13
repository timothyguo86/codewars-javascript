# [Name Array Capping](https://www.codewars.com/kata/5356ad2cbb858025d800111d)

Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

    cap_me(['jo', 'nelson', 'jurie']) # returns ['Jo', 'Nelson', 'Jurie']
    cap_me(['KARLY', 'DANIEL', 'KELSEY']) # returns ['Karly', 'Daniel', 'Kelsey']

---

<details><summary>My Solution</summary>

```js
function capMe(names) {
  return names.map(v => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
}
```

</details>
