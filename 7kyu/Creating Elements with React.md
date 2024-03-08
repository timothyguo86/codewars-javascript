# [Creating Elements with React](https://www.codewars.com/kata/55aac03755b0264947000138)

# React Kata

React is "A JavaScript library for building user interfaces". It's become a popular option amongst JavaScript frameworks and now it's supported in Codewars!

For this first React Kata, we'll be exploring how to create elements with React. React has a high-level method [`React.createElement`](https://facebook.github.io/react/docs/top-level-api.html#react.createelement) for exactly this purpose. Its usage is as simple as:

```js
React.createElement('div', { prop: 'value' }, 'Hello world!')
```

Where the first argument is the element tag, the second argument is the element's properties, and the third tag is the content you want to add into the element.

Your task is to create two wrapper methods called `createElement` and `createUnorderedList` for our own purposes.

The `createElement` method should take in a `content`, `tag`, and `properties`, similar to the React method. We should be able to call this method with just content like `createElement('Hello World')`, and by default, it should create a div with the content "Hello World".

The `createUnorderedList` method should take in `list`, which is an array of strings, and create a ul element, whose children are li elements containing the values from the list. Given an array `['apples', 'oranges', 'bananas']`, the `createUnorderedList` method should return a React element with this hierarchy:

```html
<ul>
  <li>apples</li>
  <li>oranges</li>
  <li>bananas</li>
</ul>
```

Also, React suggests that you always supply a key property when [creating dynamic children](http://facebook.github.io/react/docs/multiple-components.html#dynamic-children), so be sure to create a unique key for each child li created.

For more general information about React [check out the docs](https://facebook.github.io/react/index.html)!

---

<details><summary>My Solution</summary>

```js
var React = require('react')

function createElement(content, tag = 'div', props = {}) {
  return React.createElement(tag, props, content)
}

function createUnorderedList(list) {
  const listItems = list.map((item, index) => React.createElement('li', { key: index }, item))
  return React.createElement('ul', null, listItems)
}
```

</details>
