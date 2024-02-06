# [Multi Line Task∞: Hello World](https://www.codewars.com/kata/59a421985eb5d4bb41000031)

You need to write a function `f` that returns the string `Hello, world!`.

Requirement: Every line must have at most `1` character, and total number of lines must be less than `145`.

Hint: It's possible to complete this in less than `99` (tsukumo) lines.

---

Easier version: https://www.codewars.com/kata/5935558a32fb828aad001213

---

<details><summary>My Solution</summary>

```
[ // With destructuring assignment, start declaring variables
,
t
,
,
r
,
,
i
,
,
m
,
,
b
,
,
i
,
,
n
,
,
d
,
,
H
,
,
e
,
,
l
,
,
l
,
,
o
,
,
c // Comma
,
,
s
,
,
w
,
,
o
,
,
r
,
,
l
,
,
d
,
,
x // Exclamation mark
]
=
`
t
r
i
m
b
i
n
d
H
e
l
l
o
,

w
o
r
l
d
!
`
f // Start declaring our function
=
( // This evaluates to "" or, the String object
[
]
+
[
]
)
[ // `trim`
t
+
r
+
i
+
m
]
[ // `bind`
b
+
i
+
n
+
d
]
( // Can use parentheses or template tag syntax to call `bind`
H
+
e
+
l
+
l
+
o
+
c
+
s
+
w
+
o
+
r
+
l
+
d
+
x
)
```

</details>
