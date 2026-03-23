# Exercise 2: Wizard Classifier

## Story

The Academy's Sorting Crystal needs a new classification algorithm. When a wizard steps forward, the crystal must assess their power level and house to determine their rank. Your job is to write that logic.

## Objective

Practice `if/else`, ternary operators, comparison and logical operators, and truthy/falsy values.

## Requirements

1. Write a function `classifyWizard(wizard)` that takes an object with `name`, `power`, and `house` properties and returns a rank string:
   - Power 100+ → `"Archmage"`
   - Power 50–99 → `"Battle Mage"`
   - Power 25–49 → `"Journeyman"`
   - Below 25 → `"Apprentice"`

2. Add a house bonus: wizards from `"Raven"` get +10 to their effective power before classification

3. Write a function `formatWizard(wizard)` that uses a **ternary** to return:
   - `"⚔️ Merlin (Battle Mage)"` if power >= 50
   - `"📖 Merlin (Apprentice)"` if power < 50

4. Test with the provided roster and log results

## Test Data

```js
const roster = [
  { name: "Merlin", power: 100, house: "Liondudes" },
  { name: "Luna", power: 45, house: "Raven" },
  { name: "Neville", power: 22, house: "Badger" },
  { name: "Morgana", power: 90, house: "Serpent" },
  { name: "Colin", power: 15, house: "Raven" },
  { name: "Draco", power: 60, house: "Serpent" },
];
```

## Acceptance Criteria

- [ ] `classifyWizard` uses `if/else if/else`
- [ ] Raven house bonus is applied correctly (Luna at 45 + 10 = 55 → "Battle Mage")
- [ ] `formatWizard` uses a ternary operator
- [ ] All 6 wizards are classified and logged
- [ ] Colin (power 15 + Raven bonus 10 = 25) lands exactly on the boundary → "Journeyman"

## Hints

<details>
<summary>Click to reveal hints</summary>

**Hint 1**: Calculate effective power first, then classify:
```js
let effectivePower = wizard.power;
if (wizard.house === "Raven") {
  effectivePower += 10;
}
```

**Hint 2**: Ternary syntax: `condition ? valueIfTrue : valueIfFalse`

**Hint 3**: You can nest ternaries but it's usually clearer to use `if/else` for more than two branches.

</details>

## Bonus

- Add a `switch` statement that returns a house motto for each house
- Handle an unknown house gracefully with a default case

---

[Solution](./solution/) | [Previous](../exercise-01-variables/) | [Next Exercise](../exercise-03-loops/)
