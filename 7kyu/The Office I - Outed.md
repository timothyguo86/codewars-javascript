# [The Office I - Outed](https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1)

Your colleagues have been looking over your shoulder. When you should have been doing your boring real job, you've been
using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You
quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object ( `meet` ) containing team member names as keys, and their happiness rating out of 10 as the value, you
need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work
Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room ( `boss` ). Their score is worth double its face value (but they are still just one
person!).

[The Office II - Boredom Score](https://www.codewars.com/kata/the-office-ii-boredom-score)  
[The Office III - Broken Photocopier](https://www.codewars.com/kata/the-office-iii-broken-photocopier)  
[The Office IV - Find a Meeting Room](https://www.codewars.com/kata/the-office-iv-find-a-meeting-room)  
[The Office V - Find a Chair](https://www.codewars.com/kata/the-office-v-find-a-chair)

---

<details><summary>My Solution</summary>

```js
function outed(meet, boss) {
  const attendants = Object.keys(meet);
  const averageRating =
    attendants.reduce(
      (acc, cur) => (cur === boss ? acc + meet[cur] * 2 : acc + meet[cur]),
      0,
    ) / attendants.length;

  return averageRating > 5 ? "Nice Work Champ!" : "Get Out Now!";
}
```

</details>
