# Quest 14 Solution: Spell Counter with useSyncExternalStore

## Overview

A plain JavaScript store (outside React) that multiple components subscribe to using `useSyncExternalStore`. Both counter displays update simultaneously when the store changes.

## Key Concepts

### 1. Building an External Store

```javascript
const spellCountStore = {
  count: 0,
  listeners: new Set(),

  getSnapshot() { return this.count; },

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },

  increment() {
    this.count++;
    this.listeners.forEach((fn) => fn());
  },
};
```

The store must provide `subscribe` (returns an unsubscribe function) and `getSnapshot` (returns the current value).

### 2. Connecting React

```javascript
const count = useSyncExternalStore(
  spellCountStore.subscribe.bind(spellCountStore),
  spellCountStore.getSnapshot.bind(spellCountStore)
);
```

React calls `subscribe` to listen for changes and `getSnapshot` to read the current value. When a listener fires, React re-renders the component.

### 3. Why Not Just useState + useEffect?

`useSyncExternalStore` is designed for concurrent rendering. A manual `useEffect` subscription can "tear" — showing stale data during concurrent updates. This hook guarantees consistency.

### 4. Multiple Subscribers

Both `SpellCounter` instances subscribe to the same store. When `increment()` is called, all subscribers re-render with the same snapshot.

## When to Use useSyncExternalStore

| Scenario                             | Use it?                       |
| ------------------------------------ | ----------------------------- |
| Browser APIs (online status, media)  | Yes                           |
| Third-party state libraries          | Yes (most already use it)     |
| React state shared via context       | No — use useContext            |
| Component-local state                | No — use useState / useReducer|

## Testing

1. Click "Increment" — both counters update simultaneously
2. Click "Decrement" — both decrease together
3. Click "Reset" — both return to 0

## What's Next

Quest 15 introduces `useInsertionEffect`, a specialized hook for CSS-in-JS style injection.
