# [Lottery machine](https://www.codewars.com/kata/5832db03d5bafb7d96000107)

Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return **unique** integers as a string, in their order of first appearance. If there are no integers in the string return `"One more run!"`

## Examples

    "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
    "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
    "555"                   -->  "5"

---

<details><summary>My Solution</summary>

````js
function lottery(str){
  let result = ''
  const sanitizedStr = str.replace(/[^0-9]/g, '')
   for(let i = 0; i < sanitizedStr.length; i++) {
     if(!result.includes(sanitizedStr[i])) {
       result += sanitizedStr[i]
     }
   }

  return sanitizedStr.length === 0 ? "One more run!" : result
}
```

</details>
````
