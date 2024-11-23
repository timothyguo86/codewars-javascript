# [he Office II - Boredom Score](https://www.codewars.com/kata/57ed4cef7b45ef8774000014)

Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1  
finance = 2  
canteen = 10  
regulation = 3  
trading = 6  
change = 6  
IS = 8  
retail = 5  
cleaning = 4  
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'  
< 100 & > 80: 'i can handle this'  
100 or over: 'party time!!'

[The Office I - Outed](https://www.codewars.com/kata/the-office-i-outed)  
[The Office III - Broken Photocopier](https://www.codewars.com/kata/the-office-iii-broken-photocopier)  
[The Office IV - Find a Meeting Room](https://www.codewars.com/kata/the-office-iv-find-a-meeting-room)  
[The Office V - Find a Chair](https://www.codewars.com/kata/the-office-v-find-a-chair)

---

<details><summary>My Solution</summary>

```js
function boredom(staff) {
  const department = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25
  }
  const total = Object.values(staff).reduce((acc, cur) => acc + department[cur], 0)

  if (total > 100) return 'party time!!'
  else if (total > 80) return 'i can handle this'
  else return 'kill me now'
}
```

</details>
