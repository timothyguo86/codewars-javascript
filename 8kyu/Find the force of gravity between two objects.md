# [Find the force of gravity between two objects](https://www.codewars.com/kata/5b609ebc8f47bd595e000627)

Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

### input

Two arrays are given :

- arr_val (value array), consists of 3 elements
    - 1st element : mass of obj 1
    - 2nd element : mass of obj 2
    - 3rd element : distance between their centers
- arr_unit (unit array), consists of 3 elements
    - 1st element : unit for mass of obj 1
    - 2nd element : unit for mass of obj 2
    - 3rd element : unit for distance between their centers

mass units are :

- kilogram (kg)
- gram (g)
- milligram (mg)
- microgram (μg)
- pound (lb)

distance units are :

- meter (m)
- centimeter (cm)
- millimeter (mm)
- micrometer (μm)
- feet (ft)

### Note

value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

`μ` copy this from here to use it in your solution

---

<details><summary>My Solution</summary>

```js
solution = (arr_val, arr_unit) => {
  // Constants
  const G = 6.67e-11 // N⋅kg−2⋅m2

  // Mass conversion table
  const massUnits = {
    kg: 1,
    g: 1e-3,
    mg: 1e-6,
    μg: 1e-9,
    lb: 0.453592
  }

  // Distance conversion table
  const distanceUnits = {
    m: 1,
    cm: 1e-2,
    mm: 1e-3,
    μm: 1e-6,
    ft: 0.3048
  }

  // Convert masses to kilograms
  const m1 = arr_val[0] * massUnits[arr_unit[0]]
  const m2 = arr_val[1] * massUnits[arr_unit[1]]

  // Convert distance to meters
  const r = arr_val[2] * distanceUnits[arr_unit[2]]

  // Calculate gravitational force
  const force = (G * m1 * m2) / Math.pow(r, 2)

  return force
}
```

</details>
