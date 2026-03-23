# Exercise 3: Roster Analysis

## Story

The Academy Council has requested a full analysis of the student roster. They need names, power rankings, house groupings, and totals — all generated from a single data array. Time to put array methods to work.

## Objective

Practice `map`, `filter`, `find`, `reduce`, method chaining, and `for...of` / `for...in` loops.

## Requirements

Given this roster:

```js
const roster = [
  { name: "Merlin", power: 100, house: "Liondudes" },
  { name: "Morgana", power: 90, house: "Serpent" },
  { name: "Ron", power: 30, house: "Liondudes" },
  { name: "Luna", power: 75, house: "Raven" },
  { name: "Draco", power: 60, house: "Serpent" },
  { name: "Neville", power: 40, house: "Badger" },
];
```

Complete these tasks using array methods (not manual `for` loops):

1. **Names only** — get an array of just the wizard names
2. **Powerful wizards** — find all wizards with power above 50
3. **Find Luna** — find the wizard object named "Luna"
4. **Total power** — get the sum of all wizards' power levels
5. **Group by house** — create an object where each key is a house name and each value is an array of wizards from that house
6. **Liondudes names, sorted** — get the names of Liondudes members, sorted alphabetically

## Acceptance Criteria

- [ ] Task 1 uses `map`
- [ ] Task 2 uses `filter`
- [ ] Task 3 uses `find`
- [ ] Task 4 uses `reduce`
- [ ] Task 5 uses `reduce` to build a grouped object
- [ ] Task 6 chains `filter`, `map`, and `sort`
- [ ] All results logged to the page

## Hints

<details>
<summary>Click to reveal hints</summary>

**Hint 1**: `map` transforms: `roster.map(w => w.name)`

**Hint 2**: `reduce` signature: `array.reduce((accumulator, current) => ..., initialValue)`

**Hint 3**: For grouping, start with an empty object `{}` as the initial value:
```js
roster.reduce((groups, wizard) => {
  const key = wizard.house;
  groups[key] = groups[key] || [];
  groups[key].push(wizard);
  return groups;
}, {})
```

**Hint 4**: Chain methods left to right: `roster.filter(...).map(...).sort()`

</details>

## Bonus

- Find the wizard with the highest power using `reduce`
- Count wizards per house (object with house → number)
- Use `for...in` to iterate over the grouped-by-house object and log each house and its members

---

[Solution](./solution/) | [Previous](../exercise-02-conditionals/) | [Next Exercise](../exercise-04-functions/)
