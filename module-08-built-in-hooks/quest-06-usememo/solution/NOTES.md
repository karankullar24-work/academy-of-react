# Quest 6 Solution: Spell Power Calculator with useMemo

## Overview

A spell list with element filters and a total power calculation. Both the filtering and the sum are memoized so they only recalculate when the filter changes, not on every render.

## Key Concepts

### 1. Memoizing a Filtered List

```javascript
const filteredSpells = useMemo(() => {
  console.log("Filtering spells...");
  return SPELLS.filter(
    (spell) => filter === "all" || spell.element === filter
  );
}, [filter]);
```

The filter runs only when `filter` changes. Unrelated re-renders (like the "Force Re-render" button) skip this work entirely.

### 2. Chaining Memoized Values

```javascript
const totalPower = useMemo(() => {
  console.log("Calculating total power...");
  return filteredSpells.reduce((sum, spell) => sum + spell.power, 0);
}, [filteredSpells]);
```

`totalPower` depends on `filteredSpells`. Because `filteredSpells` is itself memoized, `totalPower` only recalculates when the filtered array actually changes.

### 3. When It Matters

`useMemo` prevents redundant work. The console logs make it visible:

- Change the filter → both logs fire (expected)
- Click "Force Re-render" → neither log fires (memoized)

## useMemo vs useCallback

| `useMemo`                   | `useCallback`                   |
| --------------------------- | ------------------------------- |
| Memoizes a **value**        | Memoizes a **function**         |
| `useMemo(() => compute())` | `useCallback(() => doThing())`  |
| Returns the result          | Returns the function itself     |

## Testing

1. Click filter buttons — spell list and total update
2. Click "Force Re-render" — no console logs, no recalculation
3. Open console to verify memoization is working

## What's Next

Quest 7 introduces `useRef` for direct DOM access without re-renders.
