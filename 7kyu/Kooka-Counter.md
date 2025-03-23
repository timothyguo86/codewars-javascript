# [Kooka-Counter](https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258)

A family of [kookaburras](https://en.wikipedia.org/wiki/Laughing_kookaburra) are in my backyard.

I can't see them all, but I can hear them!

# How many kookaburras are there?

![](../images/kooka_counter.png)

## Hint

The trick to counting kookaburras is to listen carefully

- The males sound like `HaHaHa`...
- The females sound like `hahaha`...
- And they always alternate male/female

## Examples

- `ha` = female => 1
- `Ha` = male => 1
- `Haha` = male + female => 2
- `haHa` = female + male => 2
- `hahahahaha` = female => 1
- `hahahahahaHaHaHa` = female + male => 2
- `HaHaHahahaHaHa` = male + female + male => 3

---

^ Kata Note : No validation is necessary; only valid input will be passed :-)

---

<details><summary>My Solution</summary>

```js
var kookaCounter = function (laughing) {
  return (
    (laughing.match(/(ha)+/g) || []).length +
    (laughing.match(/(Ha)+/g) || []).length
  );
};
```

</details>
