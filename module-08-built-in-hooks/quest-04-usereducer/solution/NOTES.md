# Quest 4 Solution: Simple Spell Manager with useReducer

## Overview

A basic spell list where you can add and remove spells. Introduces the `useReducer` hook as an alternative to `useState` for state driven by discrete actions.

## Key Concepts

### 1. Reducer Function

```javascript
function spellReducer(state, action) {
  switch (action.type) {
    case "ADD_SPELL":
      return { ...state, spells: [...state.spells, action.spell] };
    case "REMOVE_SPELL":
      return { ...state, spells: state.spells.filter((s) => s.id !== action.id) };
    default:
      return state;
  }
}
```

A reducer is a pure function: `(state, action) => newState`. It lives outside the component so it has no access to props or other hooks — all data comes through the action.

### 2. Wiring It Up

```javascript
const [state, dispatch] = useReducer(spellReducer, { spells: [] });
```

`useReducer` returns the current state and a `dispatch` function. Calling `dispatch` sends an action to the reducer.

### 3. Dispatching Actions

```javascript
dispatch({ type: "ADD_SPELL", spell: newSpell });
dispatch({ type: "REMOVE_SPELL", id: spell.id });
```

Actions describe **what happened**, not how to update. The reducer decides the new state.

### 4. Immutable Updates

Always return new objects and arrays — never mutate state:

```javascript
// Adding
[...state.spells, action.spell]

// Removing
state.spells.filter((s) => s.id !== action.id)
```

## When to Use useReducer vs useState

| useState                    | useReducer                    |
| --------------------------- | ----------------------------- |
| Simple values               | Structured objects or arrays  |
| 1–2 update patterns         | Multiple distinct actions     |
| Quick prototyping           | Predictable, testable updates |

## Testing

1. Click "Add Spell" — new spell appears in the list
2. Click "Remove" on a spell — it disappears
3. Empty state message shows when list is empty

## What's Next

Quest 5 introduces `useCallback` for memoizing functions to prevent unnecessary child re-renders.
