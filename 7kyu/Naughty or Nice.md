# [Naughty or Nice?](https://www.codewars.com/kata/52a6b34e43c2484ac10000cd)

## Happy Holidays fellow Code Warriors!

It's almost Christmas! That means Santa's making his list, and checking it twice. Unfortunately, elves accidentally
mixed the Naughty and Nice list together! Santa needs your help to save Christmas!

## Save Christmas!

Santa needs you to write two functions. Both of the functions accept a sequence of objects. The first one returns a
sequence containing only the names of the nice people, and the other returns a sequence containing only the names of the
naughty people. Return an empty sequence `[]` if the result from either of the functions contains no names.

The objects in the passed will represent people. Each object contains two properties: `name` and `wasNice`.  
`name` - The name of the person  
`wasNice` - True if the person was nice this year, false if they were naughty

## Person Object Examples

    { name: 'Warrior reading this kata', wasNice: true }
    { name: 'xDranik', wasNice: false }

## Test Examples

    getNiceNames( [
        { name: 'Warrior reading this kata', wasNice: true },
        { name: 'xDranik', wasNice: false },
        { name: 'Santa', wasNice: true }
    ] )
    // => returns [ 'Warrior reading this kata', 'Santa' ]

    getNaughtyNames( [
        { name: 'Warrior reading this kata', wasNice: true },
        { name: 'xDranik', wasNice: false },
        { name: 'Santa', wasNice: true }
    ] )
    // => returns [ 'xDranik' ]

---

<details><summary>My Solution</summary>

```js
function getNiceNames(people) {
  return people.filter((v) => v.wasNice).map((v) => v.name);
}

function getNaughtyNames(people) {
  return people.filter((v) => !v.wasNice).map((v) => v.name);
}
```

</details>
