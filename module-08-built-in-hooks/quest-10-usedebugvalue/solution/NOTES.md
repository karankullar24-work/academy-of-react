# Quest 10 Solution: Custom useSpellPower Hook with useDebugValue

## Overview

A custom `useSpellPower` hook that calculates power from a base level and a multiplier. `useDebugValue` makes the computed power visible in React DevTools for easier debugging.

## Key Concepts

### 1. Custom Hook with useDebugValue

```javascript
function useSpellPower(baseLevel) {
  const [multiplier, setMultiplier] = useState(1);
  const power = baseLevel * multiplier;

  useDebugValue(power, (p) => `Power: ${p}`);

  return [power, setMultiplier];
}
```

`useDebugValue` only works inside custom hooks. It displays the value next to the hook name in the React DevTools Components tab.

### 2. Optional Formatter

```javascript
useDebugValue(power, (p) => `Power: ${p}`);
```

The second argument is a formatter function. It's only called when DevTools is open, so expensive formatting doesn't affect production performance.

### 3. When to Use useDebugValue

- Inside custom hooks that are reused across a codebase
- When the hook's internal state isn't obvious from the component tree
- For library hooks that other developers will consume

### 4. When NOT to Use It

- Inside regular components (it only works in custom hooks)
- For simple hooks where the state is already visible
- In production code where DevTools aren't open (it has zero runtime cost, but also zero benefit)

## Testing

1. Install React DevTools browser extension
2. Open DevTools → Components tab
3. Click on a SpellDisplay component
4. The `useSpellPower` hook shows "Power: 40" (or current value)
5. Click "Boost" — the debug value updates

## What's Next

Quest 11 introduces `useId` for generating unique, SSR-safe IDs for accessible forms.
