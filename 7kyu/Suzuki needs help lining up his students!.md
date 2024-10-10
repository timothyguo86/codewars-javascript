# [Suzuki needs help lining up his students!](https://www.codewars.com/kata/5701800886306a876a001031)

Suzuki needs help lining up his students!

Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

You will be given a string of student names. Sort them and return a list of names in descending order.

Here is an example input:

    string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'

Here is an example return from your function:

     lst = ['Takehiko',
            'Takayuki',
            'Takahiro',
            'Takeshi',
            'Takeshi',
            'Takashi',
            'Tadashi',
            'Takeo',
            'Takao']

Names of equal length will be returned in reverse alphabetical order (Z->A) such that:

    string = "xxa xxb xxc xxd xa xb xc xd"

Returns

    ['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']

Please also try the other Kata in this series..

- [Help Suzuki count his vegetables...](https://www.codewars.com/kata/56ff1667cc08cacf4b00171b)
- [Help Suzuki purchase his Tofu!](https://www.codewars.com/kata/57d4ecb8164a67b97c00003c)
- [Help Suzuki pack his coal basket!](https://www.codewars.com/kata/57f09d0bcedb892791000255)
- [Help Suzuki rake his garden!](https://www.codewars.com/kata/571c1e847beb0a8f8900153d)
- [How many stairs will Suzuki climb in 20 years?](https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e)

---

<details><summary>My Solution</summary>

```js
function lineupStudents(students) {
  return students.split(' ').sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length
    }

    return b.localeCompare(a)
  })
}
```

</details>
