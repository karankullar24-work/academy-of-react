# Quest 5 Solution: Spell Caster with useCallback

## Overview

A parent component passes a callback to a memoized child. Without `useCallback`, the child would re-render every time the parent renders because the function reference changes. Demonstrates `useCallback` paired with `React.memo`.

## Key Concepts

### 1. The Problem: Unstable References

Every render creates a new function object. Even if the logic is identical, `===` returns false:

```javascript
// Without useCallback — new function every render
const handleCast = () => { setCount(c => c + 1); };
```

If the child is wrapped in `React.memo`, it compares props by reference. A new function reference defeats the memo.

### 2. Memoizing with useCallback

```javascript
const castFireball = useCallback(() => {
  setCount((c) => c + 1);
}, []);
```

`useCallback` returns the same function reference as long as the dependencies haven't changed. With `[]`, it's stable forever.

### 3. React.memo on the Child

```javascript
const SpellButton = memo(function SpellButton({ onCast, spellName }) {
  console.log(`SpellButton "${spellName}" rendered`);
  return <button onClick={onCast}>Cast {spellName}</button>;
});
```

`memo` skips re-rendering if props are the same by reference. Combined with a stable callback, the child stays still when unrelated parent state changes.

### 4. Functional setState to Avoid Dependencies

```javascript
setCount((c) => c + 1);  // No need to list `count` as a dependency
```

Using the updater form means the callback doesn't close over `count`, so the dependency array can stay empty.

## Testing

1. Click "Update Other State" — check console, SpellButton should **not** log
2. Click "Cast Fireball" — spell count increments, SpellButton logs once
3. Remove `useCallback` — SpellButton logs on every parent render

## What's Next

Quest 6 introduces `useMemo` for memoizing expensive computed values.
