# [Driving Licence](https://www.codewars.com/kata/59e49b2afc3c494d5d00002a)

# Introduction

In the United Kingdom, the driving licence is the official document which authorises its holder to operate various types of motor vehicle on highways and some other roads to which the public have access. In England, Scotland and Wales they are administered by the Driver and Vehicle Licensing Agency (DVLA) and in Northern Ireland by the Driver & Vehicle Agency (DVA). A driving licence is required in the UK by any person driving a vehicle on any highway or other road defined in s.192 Road Traffic Act 1988\[1\] irrespective of ownership of the land over which the road passes, thus including many which allow the public to pass over private land; similar requirements apply in Northern Ireland under the Road Traffic (Northern Ireland) Order 1981. (Source [Wikipedia](https://en.wikipedia.org/wiki/Driving_licence_in_the_United_Kingdom))

![Driving](../images/driving_license.jpg)

# Task

The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information

# Rules

1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"

Your task is to code a UK driving license number using an Array of data. The Array will look like

    data = ["John","James","Smith","01-Jan-2000","M"]


    data = ["John","James","Smith","01-Jan-2000","M"]


    data = ["John","James","Smith","01-Jan-2000","M"]


    data = ["John","James","Smith","01-Jan-2000","M"]


    data = ["John","James","Smith","01-Jan-2000","M"];


    data = ["John","James","Smith","01-Jan-2000","M"];


    data = {"John","James","Smith","01-Jan-2000","M"};


    data = {"John","James","Smith","01-Jan-2000","M"};


    data = {"John","James","Smith","01-Jan-2000","M"};

Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female

You will need to output the full 16 digit driving license number.

Good luck and enjoy!

# Kata Series

If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Maze Runner](https://www.codewars.com/kata/58663693b359c4a6560001d6)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Scooby Doo Puzzle](https://www.codewars.com/kata/58693bbfd7da144164000d05)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/7KYU.png) [Driving License](https://www.codewars.com/kata/586a1af1c66d18ad81000134)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Connect 4](https://www.codewars.com/kata/586c0909c1923fdb89002031)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Vending Machine](https://www.codewars.com/kata/586e6d4cb98de09e3800014f)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Snakes and Ladders](https://www.codewars.com/kata/587136ba2eefcb92a9000027)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Mastermind](https://www.codewars.com/kata/58a848258a6909dd35000003)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Guess Who?](https://www.codewars.com/kata/58b2c5de4cf8b90723000051)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Am I safe to drive?](https://www.codewars.com/kata/58f5c63f1e26ecda7e000029)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Mexican Wave](https://www.codewars.com/kata/58f5c63f1e26ecda7e000029)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Pigs in a Pen](https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Hungry Hippos](https://www.codewars.com/kata/590300eb378a9282ba000095)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Plenty of Fish in the Pond](https://www.codewars.com/kata/5904be220881cb68be00007d)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Fruit Machine](https://www.codewars.com/kata/590adadea658017d90000039)

![Rank](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png) [Car Park Escape](https://www.codewars.com/kata/591eab1d192fe0435e000014)

---

<details><summary>My Solution</summary>

```js
function driver(data) {
  const monthMap = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  }
  return (
    `${data[2].slice(0, 5).padEnd(5, '9').toUpperCase()}` +
    `${data[3].slice(-2, -1)}` +
    `${data[4] === 'M' ? monthMap[data[3].slice(3, 6)] : Number(monthMap[data[3].slice(3, 6)]) + 50}` +
    `${data[3].slice(0, 2)}` +
    `${data[3].slice(-1)}` +
    `${data[0][0] + (data[1][0] || '9')}` +
    '9AA'
  )
}
```

</details>
