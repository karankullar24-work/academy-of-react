# Exercise 4: Spell Crafting

## Story

The Academy's Spell Workshop lets wizards forge new spells, build custom enchantment tools, and manage their mana reserves. You'll practise all the function patterns that come up constantly in React.

## Objective

Practice arrow functions, default parameters, rest parameters, callbacks, and closures.

## Requirements

### Part A: Arrow Functions & Defaults

1. Write an arrow function `createSpell(name, damage, element)` that returns an object `{ name, damage, element }`. Give `damage` a default of `10` and `element` a default of `"arcane"`.

2. Create these spells and log them:
   - `createSpell("Fireball", 50, "fire")`
   - `createSpell("Spark")` — should use both defaults
   - `createSpell("Ice Lance", 35)` — should default element only

### Part B: Your Own Map

3. Write a function `applyToAll(arr, fn)` that takes an array and a callback, and returns a new array with the callback applied to each element. (You're building your own `map`.)

4. Use `applyToAll` to:
   - Double every number in `[2, 5, 10]`
   - Uppercase every string in `["fireball", "heal", "shield"]`

### Part C: Closures

5. Write a function `createManaPool(startingMana)` that returns an object with:
   - `cast(cost)` — deducts `cost` from mana and returns `true`, or returns `false` if not enough mana
   - `remaining()` — returns current mana

6. Create a pool with 50 mana, cast three spells costing 20, 20, and 20, and log what happens.

## Acceptance Criteria

- [ ] `createSpell` is an arrow function with default parameters
- [ ] Spells are returned as objects using shorthand `{ name, damage, element }`
- [ ] `applyToAll` takes a callback and returns a new array
- [ ] `applyToAll` does not use `.map()` internally (use a `for` loop)
- [ ] `createManaPool` uses a closure to keep mana private
- [ ] Third cast (20 mana when only 10 left) returns `false`

## Hints

<details>
<summary>Click to reveal hints</summary>

**Hint 1**: Arrow function returning an object needs parentheses:
```js
const createSpell = (name, damage = 10, element = "arcane") => ({ name, damage, element });
```

**Hint 2**: `applyToAll` is just a loop that pushes transformed values:
```js
function applyToAll(arr, fn) {
  const result = [];
  for (const item of arr) {
    result.push(fn(item));
  }
  return result;
}
```

**Hint 3**: Closures capture variables from the outer scope:
```js
function createManaPool(startingMana) {
  let mana = startingMana;
  return {
    cast(cost) { /* use and modify mana here */ },
    remaining() { return mana; },
  };
}
```

</details>

## Bonus

- Add a `rest` parameter version: `sumAll(...numbers)` that sums any number of arguments
- Add a `meditate(amount)` method to the mana pool that restores mana (but never above the starting value)

---

[Solution](./solution/) | [Previous](../exercise-03-loops/) | [Next Exercise](../exercise-05-objects/)
