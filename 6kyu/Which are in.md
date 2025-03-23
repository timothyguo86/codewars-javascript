# [Which are in?](https://www.codewars.com/kata/550554fd08b86f84fe000a58)

# Description

Given two arrays of strings `a1` and `a2`, return a sorted array `r` in lexicographical order of the strings of `a1`
which are substrings of strings of `a2`.

#### Example 1:

```
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]
```

#### Example 2:

```
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []
```

#### Notes:

- Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
- In Shell bash `a1` and `a2` are strings. The return is a string where words are separated by commas.
- Beware: In some languages `r` must be without duplicates.

---

<details><summary>My Solution</summary>

```js
function inArray(array1, array2) {
  const result = [];
  array1.map((str1) => {
    if (array2.some((str2) => str2.includes(str1))) {
      result.push(str1);
    }
  });

  return result.sort();
}
```

</details>
