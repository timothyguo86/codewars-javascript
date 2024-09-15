# [Coding Meetup #14 - Higher-Order Functions Series - Order the food](https://www.codewars.com/kata/583952fbc23341c7180002fd)

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>You are given a string of <code>n</code> lines, each substring being <code>n</code> characters long. 
For example:</p>
<p><code>s = "abcd\nefgh\nijkl\nmnop"</code></p>
<p>We will study the "horizontal" and the "vertical" <strong>scaling</strong> of this square of strings.</p>
<p>A k-horizontal scaling of a string consists of replicating <code>k</code> times each character of the string
(except '\n').</p>
<ul>
<li>Example: 2-horizontal scaling of s: =&gt; "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"</li>
</ul>
<p>A v-vertical scaling of a string consists of replicating <code>v</code> times each part of the squared string.</p>
<ul>
<li>Example: 2-vertical scaling of s: =&gt; "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"</li>
</ul>
<p>Function <code>scale(strng, k, v)</code> will perform a k-horizontal scaling and a v-vertical scaling.</p>
<pre><code>Example: a = "abcd\nefgh\nijkl\nmnop"
scale(a, 2, 3) --&gt; "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
</code></pre>
<p>Printed:</p>
<pre><code>abcd   -----&gt;   aabbccdd
efgh            aabbccdd
ijkl            aabbccdd
mnop            eeffgghh
                eeffgghh
                eeffgghh
                iijjkkll
                iijjkkll
                iijjkkll
                mmnnoopp
                mmnnoopp
                mmnnoopp
</code></pre>
<h4 id="task">Task:</h4>
<ul>
<li>Write function <code>scale(strng, k, v)</code> 
k and v will be positive integers. If <code>strng == ""</code> return <code>""</code>.</li>
</ul>
</div>

<details><summary>My Solution</summary>

```js
function scale(strng, k, n) {
  if (strng === '') return ''

  let rows = strng.split('\n').map(row =>
    row
      .split('')
      .map(el => el.repeat(k))
      .join('')
  )
  return rows.map(row => Array(n).fill(row).join('\n')).join('\n')
}
```

</details>
