# [FIXME: Hello](https://www.codewars.com/kata/5b0a80ce84a30f4762000069)

The code provided has a method `hello` which is supposed to show only those attributes which have been _explicitly_ set. Furthermore, it is supposed to say them in the _same order_ they were set.

But it's not working properly.

## Notes

There are 3 attributes:

- name
- age
- sex ('M' or 'F')

When the same attribute is assigned multiple times, the `hello` method shows it only once. If this happens, the order depends on the _first_ assignment of that attribute, but the value is from the _last_ assignment.

## Examples

- `Hello.`
- `Hello. My name is Bob. I am 27. I am male.`
- `Hello. I am 27. I am male. My name is Bob.`
- `Hello. My name is Alice. I am female.`
- `Hello. My name is Batman.`

## Task

Fix the code so we can all go home early.

---

<details><summary>My Solution</summary>

```js
class Dinglemouse {
  constructor() {
    // Initialize an array to store attributes
    this.attributes = []
  }

  // Method to set the age attribute
  setAge(age) {
    // Set the age attribute
    this.age = age
    // Add 'age' to the list of attributes
    this.attributes.push('age')
    // Return the current object to allow method chaining
    return this
  }

  // Method to set the sex attribute
  setSex(sex) {
    this.sex = sex
    // Add 'sex' to the list of attributes
    this.attributes.push('sex')
    // Return the current object to allow method chaining
    return this
  }

  // Method to set the name attribute
  setName(name) {
    // Set the name attribute
    this.name = name
    // Add 'name' to the list of attributes
    this.attributes.push('name')
    // Return the current object to allow method chaining
    return this
  }

  // Method to generate a greeting message
  hello() {
    // Get unique attributes
    const uniqueAttributes = [...new Set(this.attributes)]
    // Initialize the message
    let message = 'Hello.'
    // Iterate over unique attributes
    uniqueAttributes.forEach(attr => {
      // Add attribute-specific message to the greeting message
      if (attr === 'age') message += ` I am ${this.age}.`
      else if (attr === 'name') message += ` My name is ${this.name}.`
      else if (attr === 'sex') message += ` I am ${this.sex === 'M' ? 'male' : 'female'}.`
    })

    // Return the final greeting message
    return message
  }
}
```

</details>
