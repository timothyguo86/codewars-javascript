# [Sum of a Beach](https://www.codewars.com/kata/5b37a50642b27ebf2e000010)

Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words `"Sand"`,
`"Water"`, `"Fish"`, and `"Sun"` appear without overlapping (regardless of the case).

## Examples

    SumOfABeach("WAtErSlIde")                    ==>  1
    SumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
    SumOfABeach("gOfIshsunesunFiSh")             ==>  4
    SumOfABeach("cItYTowNcARShoW")               ==>  0

---

<details><summary>My Solution</summary>

```js
function sumOfABeach(beach) {
  return (beach.match(/sand|water|fish|sun/gi) || []).length;
}
```

</details>
