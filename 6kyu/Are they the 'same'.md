# [Are they the "same"](https://www.codewars.com/kata/550498447451fbbd7600041c)

Given two arrays `a` and `b`, write a function `comp(a, b)` (or `compSame(a, b)`) that checks whether the two arrays
have the "same" elements, with the same _multiplicities_ (the multiplicity of a member is the number of times it
appears). "Same" means, here, that the elements in `b` are the elements in `a` squared, regardless of the order.

#### Examples

##### Valid arrays

```js
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
```

`comp(a, b)` returns true because in `b` 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144,
361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write `b`'s elements in terms of
squares:

```js
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
```

### Invalid arrays

If, for example, we change the first number to something else, `comp` is not returning true anymore:

```js
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
```

`comp(a, b)` returns false because in `b` 132 is not the square of any number of `a`.

```js
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
```

`comp(a, b)` returns false because in `b` 36100 is not the square of any number of `a`.

### Remarks

- `a` or `b` might be `[]` or `{}` (all languages except R, Shell).
- `a` or `b` might be `nil` or `null` or `None` or `nothing` (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran,
  F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

If `a` or `b` are `nil` (or `null` or `None`, depending on the language), the problem doesn't make sense so return
false.

---

<details><summary>My Solution</summary>

```js
function comp(arr1, arr2) {
  if (arr1 === [] && arr2 === []) return true
  if (arr1 === null || arr2 === null) return false

  const newArr1 = arr1.map(num => num ** 2).sort((a, b) => a - b)
  const newArr2 = arr2.sort((a, b) => a - b)

  return newArr1.toString() === newArr2.toString()
}
```

</details>
