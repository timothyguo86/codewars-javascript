# [Breaking search bad](https://www.codewars.com/kata/52cd53948d673a6e66000576)

The function must return the sequence of titles that match the string passed as an argument.

TITLES is a preloaded sequence of strings.

```js
TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
search('ock') --> ['Rocky 1', 'Rocky 2']
```

But the function return some weird result and skip some of the matching results.

Does the function have special movie taste?

Let's figure out !

---

<details><summary>My Solution</summary>

```js
function search(searchTerm) {
  // A new regular expression object is created inside the filter function for each title in the TITLES array.
  return TITLES.filter(title => new RegExp(searchTerm, 'gi').test(title))
}
```

</details>
