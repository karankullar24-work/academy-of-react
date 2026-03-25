# Quest 12 Solution: Spell Search with useTransition

## Overview

A search input that filters 5,000 spells. The input update is urgent (stays responsive), while the list filtering is wrapped in `startTransition` so it can be interrupted without blocking typing.

## Key Concepts

### 1. Separating Urgent and Non-Urgent Updates

```javascript
const [isPending, startTransition] = useTransition();

const handleSearch = (e) => {
  const value = e.target.value;
  setSearchTerm(value);          // Urgent — input stays responsive

  startTransition(() => {
    const filtered = ALL_SPELLS.filter((spell) =>
      spell.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSpells(filtered);  // Non-urgent — can be interrupted
  });
};
```

React prioritizes the `setSearchTerm` update. The `setFilteredSpells` inside `startTransition` yields to more urgent work (like the next keystroke).

### 2. Pending State

```jsx
{isPending && <div className="loading">Searching...</div>}
```

`isPending` is `true` while the transition is in progress. Use it to show a loading indicator without blocking the input.

### 3. How It Differs from Debouncing

Debouncing delays the update by a fixed time. `useTransition` lets React schedule it intelligently — it starts immediately but yields when higher-priority work arrives.

## When to Use useTransition

| Scenario                        | Use useTransition? |
| ------------------------------- | ------------------ |
| Filtering a large list          | Yes                |
| Switching tabs with heavy content | Yes              |
| Simple counter increment        | No — already fast  |
| Network requests                | No — use Suspense  |

## Testing

1. Type quickly in the search box — input should never lag
2. "Searching..." indicator appears during filtering
3. Results update after typing pauses
4. Try with 5,000 items — still smooth

## What's Next

Quest 13 introduces `useDeferredValue`, which solves a similar problem from the value side rather than the update side.
