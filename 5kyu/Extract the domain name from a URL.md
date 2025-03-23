# [Extract the domain name from a URL](https://www.codewars.com/kata/514a024011ea4fb54200004b)

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For
example:

    * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
    * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
    * url = "https://www.cnet.com"                -> domain name = cnet"

---

<details><summary>My Solution</summary>

```js
function domainName(url) {
  return url
    .replace("www.", "")
    .replace("http://", "")
    .replace("https://", "")
    .split(".")[0];
}
```

</details>
