# [Algorithmic predicament- Bug Fixing #9](https://www.codewars.com/kata/55d3b1f2c1b2f0d3470000a9)

Oh no! Timmy's algorithm has gone wrong! Help Timmy fix his algorithm!

### Task

Your task is to fix Timmy's algorithm so it returns the group name with the highest total age.

You will receive two groups of `people` objects, with two properties `name` and `age`. The name property is a string,
and the age property is a number.

Your goal is to calculate the total age of all people with the same name in both groups and return the name of the
person with the highest total age. If two names have the same total age, return the first alphabetical name.

---

<details><summary>My Solution</summary>

```js
function highestAge(group1, group2) {
  // Initialize a variable to store the person with the highest age
  var highestName = { name: '', age: -1 }
  // Initialize an array to store unique people based on their names
  let newGroup = []
  // Concatenate group1 and group2 to create a combined group
  let combGroup = group1.concat(group2)

  // Loop through the combined group to accumulate ages based on names
  for (var i = 0; i < combGroup.length; i++) {
    // If the name is not in newGroup, add the person; otherwise, accumulate the age
    if (newGroup.indexOfProp('name', combGroup[i].name) === -1) {
      newGroup.push(combGroup[i])
    } else {
      newGroup[newGroup.indexOfProp('name', combGroup[i].name)].age += combGroup[i].age
    }
  }

  // Sort the newGroup alphabetically by names
  newGroup = newGroup.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  })

  // Loop through the sorted newGroup to find the person with the highest age
  for (var i = 0; i < newGroup.length; i++) {
    if (newGroup[i].age > highestName.age) {
      highestName = newGroup[i]
    }
  }

  // Return the name of the person with the highest age
  return highestName.name
}

// Prototype method to find the index of an element with a specific property value in an array
Array.prototype.indexOfProp = function(prop, value) {
  for (var i = 0; i < this.length; i++) {
    if (this[i][prop] === value) return i
  }

  return -1
}
```

</details>