# [Cuckoo Clock](https://www.codewars.com/kata/656e4602ee72af0017e37e82)

The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, half hour, and three-quarter hour. At
the beginning of each hour (1-12), it chimes out the hour. Given the current time and a number _n_, determine the time
when the cuckoo bird has chimed \_n_times.

Input Parameters:  
_initial_time_ - a string in the format "HH:MM", where 1 ≤ HH ≤ 12 and 0 ≤ MM ≤ 59, with leading 0’s if necessary.  
_n_ - an integer representing the target number of chimes, with 1 <= _n_ <= 200.

Return Value: The time when the cuckoo bird has chimed _n_times - a string in the same format as \_initial_time_.

If the cuckoo bird chimes at _initial_time_, include those chimes in the count. If the \_n_th chime is reached on the
hour, report the time at the start of that hour (i.e. assume the cuckoo finishes chiming before the minute is up).

Example: _"03:38", 19_should return _"06:00"_.  
Explanation: It chimes once at _"03:45"_, 4 times at _"04:00"_, once each at _"04:15", "04:30", "04:45"_, 5 times at _"
05:00"_, and once each at _"05:15", "05:30", "05:45"_. At this point it has chimed 16 times, so the 19th chime occurs
when it chimes 6 times at _"06:00"\_.

Source: International Collegiate Programming Contest, North Central North American Regional, 2023.

Related Kata: [Fizz Buzz Cuckoo Clock](https://www.codewars.com/kata/58485a43d750d23bad0000e6)

---

<details><summary>My Solution</summary>

```js
function cuckooClock(inputTime, chimes) {
  console.log(inputTime, chimes);
  let [hours, mins] = inputTime.split(":").map((el) => parseInt(el));
  let nextQuarters = Math.ceil(mins / 15);

  while (chimes > 0) {
    if (nextQuarters !== 4) {
      chimes = chimes - 1;
    } else {
      chimes = chimes - hours;
      hours = (hours + 1) % 12;
    }
    nextQuarters = (nextQuarters + 1) % 4;
  }

  const hoursDisplay = hours.toString().padStart(2, "0");
  const minsDisplay = ((nextQuarters - 1) * 15).toString().padEnd(2, "0");
  inputTime = [hoursDisplay, minsDisplay].join(":");

  return inputTime;
}
```

</details>
