# Quest 2 Solution: Mana Regeneration with useEffect

## Overview

A mana bar that automatically regenerates over time using `setInterval`, with proper cleanup when the component unmounts. Demonstrates `useEffect` for managing side effects.

## Key Concepts

### 1. Setting Up a Side Effect

```javascript
useEffect(() => {
  const intervalId = setInterval(() => {
    setMana((currentMana) => {
      if (currentMana >= 100) return 100;
      return Math.min(currentMana + 5, 100);
    });
  }, 1000);

  return () => clearInterval(intervalId);
}, []);
```

The effect runs after the first render. The empty dependency array `[]` means it runs once on mount and cleans up on unmount.

### 2. Cleanup Functions

```javascript
return () => {
  clearInterval(intervalId);
};
```

Returning a function from `useEffect` tells React to run it when the component unmounts (or before re-running the effect). This prevents memory leaks from orphaned intervals.

### 3. Functional State Updates

```javascript
setMana((currentMana) => Math.min(currentMana + 5, 100));
```

Using the function form of `setState` ensures you always work with the latest value, even inside a stale closure like a `setInterval` callback.

### 4. Dependency Arrays

| Pattern              | Runs When                        |
| -------------------- | -------------------------------- |
| `useEffect(fn)`      | Every render                     |
| `useEffect(fn, [])`  | Mount only (cleanup on unmount)  |
| `useEffect(fn, [a])` | Mount + whenever `a` changes     |

## Testing

1. Watch the mana bar fill automatically (5% per second)
2. Click "Cast Spell" — mana drops by 20%
3. Mana should cap at 100% and never exceed it
4. Button disabled when mana is below 20%

## What's Next

Quest 3 introduces `useContext` for sharing state across components without prop drilling.
