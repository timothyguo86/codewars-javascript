# [Scramblies](https://www.codewars.com/kata/55c04b4cc56a697bb0000048)

Complete the function `scramble(str1, str2)` that returns `true` if a portion of `str1` characters can be rearranged to
match `str2`, otherwise returns `false`.

**Notes:**

- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered.

## Examples

    scramble('rkqodlw', 'world') ==> True
    scramble('cedewaraaossoqqyt', 'codewars') ==> True
    scramble('katas', 'steak') ==> False

---

<details><summary>My Solution</summary>

```js
function scramble(str1, str2) {
  if (str1.length < str2.length) return false;
  const createMap = (str) => {
    const map = {};
    str.split("").forEach((v) => {
      if (map[v]) map[v]++;
      else map[v] = 1;
    });
    return map;
  };

  const map1 = createMap(str1);
  const map2 = createMap(str2);

  for (let key in map2) {
    if (!map1[key] || map1[key] < map2[key]) return false;
  }

  return true;
}
```

</details>
