# [Ordering the words!](https://www.codewars.com/kata/55d7e5aa7b619a86ed000070)

### Description:

Given a string, you need to write a method that order every letter in this string in ascending order.

Also, you should validate that the given string is not empty or null. If so, the method should return:

    "Invalid String!"

#### Notes

• the given string can be lowercase and uppercase.  
• the string could include spaces or other special characters like '# ! or ,'. Sort them based on their ASCII codes

### Examples

    "hello world" => " dehllloorw"
    "bobby"       => "bbboy"
    ""            => "Invalid String!"
    "!Hi You!"    => " !!HYiou"

**Good luck! Hope you enjoy it**

---

<details><summary>My Solution</summary>

```js
function orderWord(s) {
  if (!s) return "Invalid String!";
  return [...s].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
}
```

</details>
