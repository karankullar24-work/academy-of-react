# Exercise 5: Wizard Inventory

## Story

A wizard's gear is sacred — never modify it directly. At the Academy, all inventory changes must produce a *new* record, keeping the original intact for the Archive. This is the same immutable-update pattern you'll use for React state.

## Objective

Practice destructuring, spread operator, and immutable object/array updates.

## Starting Data

```js
const wizard = {
  name: "Merlin",
  stats: { power: 100, defense: 50 },
  spells: ["Fireball", "Heal"],
  equipment: {
    weapon: "Staff of Ages",
    armor: "Enchanted Robes",
  },
};
```

## Requirements

Using **spread** and **without mutating the original**:

1. Create `wizard2` with power increased to 120 (nested update inside `stats`)
2. Create `wizard3` with "Shield" added to spells
3. Create `wizard4` with the weapon changed to "Elder Wand" (nested update inside `equipment`)
4. Create `wizard5` with "Fireball" removed from spells (use `filter`)
5. Use **destructuring** to extract:
   - `name` from the wizard
   - `power` from `stats`
   - The first spell as `primarySpell` (array destructuring)

After each step, verify the original `wizard` is unchanged.

## Acceptance Criteria

- [ ] All updates use spread (`...`) — no direct mutation
- [ ] `wizard.stats.power` is still 100 after creating `wizard2`
- [ ] `wizard.spells` still has 2 items after creating `wizard3`
- [ ] `wizard.equipment.weapon` is still "Staff of Ages" after creating `wizard4`
- [ ] Destructuring extracts `name`, `power`, and `primarySpell` correctly
- [ ] All results logged to the page

## Hints

<details>
<summary>Click to reveal hints</summary>

**Hint 1**: Nested spread for updating `stats`:
```js
const wizard2 = {
  ...wizard,
  stats: { ...wizard.stats, power: 120 },
};
```

**Hint 2**: Adding to an array without mutating:
```js
const wizard3 = {
  ...wizard,
  spells: [...wizard.spells, "Shield"],
};
```

**Hint 3**: Removing from an array without mutating:
```js
const wizard5 = {
  ...wizard,
  spells: wizard.spells.filter(s => s !== "Fireball"),
};
```

**Hint 4**: Nested destructuring:
```js
const { name, stats: { power } } = wizard;
const [primarySpell] = wizard.spells;
```

</details>

## Bonus

- Create `wizard6` that updates *both* power to 200 *and* adds "Teleport" to spells in a single spread expression
- Use `Object.freeze()` on the original wizard and confirm that direct mutation throws an error (in strict mode) while spread still works

---

[Solution](./solution/) | [Previous](../exercise-04-functions/) | [Back to JavaScript Fundamentals](../)
