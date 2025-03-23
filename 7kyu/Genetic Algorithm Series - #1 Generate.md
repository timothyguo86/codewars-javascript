# [Genetic Algorithm Series - #1 Generate](https://www.codewars.com/kata/567d609f1c16d7369c000008)

A genetic algorithm is based in groups of chromosomes, called populations. To start our population of chromosomes we
need to generate random binary strings with a specified length.

In this kata you have to implement a function `generate` that receives a `length` and has to return a random binary
strings with `length` characters.

![](./../images/generic_algorithm_series_1.gif)

# Example:

Generate a chromosome with length of 4 `generate(4)` could return the chromosome `0010`, `1110`, `1111`... or any of
`2^4` possibilities.

_**Note:**_ _Some tests are random. If you think your algorithm is correct but the result fails, trying again should
work._

# See other katas from this series

- **Genetic Algorithm Series - #1 Generate**
- [Genetic Algorithm Series - #2 Mutation](http://www.codewars.com/kata/genetic-algorithm-series-number-2-mutation)
- [Genetic Algorithm Series - #3 Crossover](http://www.codewars.com/kata/genetic-algorithm-series-number-3-crossover)
- [Genetic Algorithm Series - #4 Get population and fitnesses](http://www.codewars.com/kata/genetic-algorithm-series-number-4-get-population-and-fitnesses)
- [Genetic Algorithm Series - #5 Roulette wheel selection](http://www.codewars.com/kata/genetic-algorithm-series-number-5-roulette-wheel-selection)

_This kata is a piece of [Binary Genetic Algorithm](http://www.codewars.com/kata/526f35b9c103314662000007)_

---

<details><summary>My Solution</summary>

```js
const generate = length => Array.from({ length }, () => (Math.random() > 0.5 ? '1' : '0')).join('')
```

</details>
