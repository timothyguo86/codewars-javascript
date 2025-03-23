# [Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer](https://www.codewars.com/kata/582887f7d04efdaae3000090)

You will be given a sequence of objects representing data about developers who have signed up to attend the next coding
meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age
senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

    var list1 = [
      { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
      { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
      { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
      { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
    ];

your function should return the following array:

    [
      { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
      { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
    ]

Notes:

- The input array will always be valid and formatted as in the example above and will never be empty.

This kata is part of the **Coding Meetup** series which includes a number of short and easy to follow katas which have
been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like:
`forEach, filter, map, reduce, some, every, find, findIndex`. Other approaches to solving the katas are of course
possible.

Here is the full list of the katas in the **Coding Meetup** series:

[Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe](http://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe)

[Coding Meetup #2 - Higher-Order Functions Series - Greet developers](https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers)

[Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?](https://www.codewars.com/kata/coding-meetup-number-3-higher-order-functions-series-is-ruby-coming)

[Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer](https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer)

[Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages](https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages)

[Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?](https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language)

[Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer](http://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer)

[Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?](https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented)

[Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?](https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse)

[Coding Meetup #10 - Higher-Order Functions Series - Create usernames](https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames)

[Coding Meetup #11 - Higher-Order Functions Series - Find the average age](https://www.codewars.com/kata/coding-meetup-number-11-higher-order-functions-series-find-the-average-age)

[Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins](https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins)

[Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?](https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse)

[Coding Meetup #14 - Higher-Order Functions Series - Order the food](https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food)

[Coding Meetup #15 - Higher-Order Functions Series - Find the odd names](https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names)

[Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details](https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details)

---

<details><summary>My Solution</summary>

```js
function findSenior(list) {
  let oldestAge = list.sort((a, b) => b.age - a.age)[0].age;

  return list.filter((v) => v.age === oldestAge);
}
```

</details>
