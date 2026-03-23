# Exercise 1: Wizard Character Sheet

## Story

Every wizard at the Arcane Academy starts with a character sheet. Your job is to build one using JavaScript variables - choosing the right declaration for each value based on whether it will change.

## Objective

Practice `const`, `let`, data types, and template literals by creating and modifying a wizard's stats.

## Requirements

1. Declare variables for a wizard:
   - `name` - a string (won't change)
   - `health` - a number starting at 100 (will change)
   - `mana` - a number starting at 50 (will change)
   - `spells` - an array of at least 3 spell names (will be added to)
   - `inCombat` - a boolean, starts `false`

2. Use the correct declaration (`const` vs `let`) for each

3. Simulate a battle round:
   - Take 25 damage (reduce health)
   - Cast a spell for 15 mana (reduce mana)
   - Learn a new spell (add to the array)
   - Enter combat (set `inCombat` to `true`)

4. Log a summary using a template literal:
   ```
   Merlin - HP: 75 / Mana: 35 - Spells: Fireball, Heal, Shield, Barrier - In Combat: true
   ```

## Acceptance Criteria

- [ ] All variables use `const` or `let` appropriately
- [ ] No use of `var`
- [ ] Health and mana are modified after declaration
- [ ] A new spell is added to the array
- [ ] Summary uses a template literal with `${}` interpolation
- [ ] Output displays in the browser

## Hints

<details>
<summary>Click to reveal hints</summary>

**Hint 1**: `const` doesn't mean the value can't change - it means the binding can't be reassigned. Arrays and objects declared with `const` can still be modified with methods like `.push()`.

**Hint 2**: Use `.join(", ")` to turn an array into a comma-separated string.

**Hint 3**: Template literals use backticks, not quotes: `` `Hello ${name}` ``

</details>

## Bonus

- Add a `level` that starts at 1
- After the battle round, gain a level
- Display a different title based on level: 1-5 = "Apprentice", 6-10 = "Journeyman", 11+ = "Master"

---

[Solution](./solution/) | [Next Exercise](../exercise-02-conditionals/)
