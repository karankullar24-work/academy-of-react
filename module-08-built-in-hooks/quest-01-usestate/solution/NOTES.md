# Quest 1 Solution: Spell Counter with useState

## Overview

A simple spell counter that tracks how many spells have been cast, with milestone messages at different thresholds. Demonstrates the core `useState` hook for managing local component state.

## Key Concepts

### 1. Declaring State

```javascript
const [spellCount, setSpellCount] = useState(0);
```

`useState` returns a pair: the current value and a setter function. The argument (`0`) is the initial value, used only on the first render.

### 2. Updating State

```javascript
const castSpell = () => {
  setSpellCount(spellCount + 1);
};
```

Calling `setSpellCount` triggers a re-render with the new value. React replaces the old state — it never mutates it.

### 3. Conditional Rendering from State

```javascript
const getMilestoneMessage = () => {
  if (spellCount >= 20) return "Legendary Wizard! 🌟";
  if (spellCount >= 10) return "Spell Master! ⚡";
  if (spellCount >= 5) return "Getting the hang of it! 🔥";
  return "";
};
```

Derive display values from state. No need for a second state variable — compute from what you already have.

## When to Use useState

| Good Fit                         | Consider Something Else              |
| -------------------------------- | ------------------------------------ |
| Simple values (number, string)   | Complex objects with many actions    |
| One or two update patterns       | Many interrelated state values       |
| Component-local state            | State shared across distant siblings |

## Testing

1. Click "Cast Spell" — count increments
2. Reach 5, 10, 20 — milestone messages appear
3. Click "Reset" — count returns to 0

## What's Next

Quest 2 introduces `useEffect` for side effects like timers and cleanup.
