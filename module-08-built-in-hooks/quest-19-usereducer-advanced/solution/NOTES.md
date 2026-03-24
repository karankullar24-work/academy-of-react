# Quest 19 Solution: Spell Inventory with useReducer (Advanced)

## Overview

A full spell inventory system with add, remove, upgrade, and favorite actions — all managed through a single reducer. Demonstrates how `useReducer` scales to handle complex state with many action types.

## Key Concepts

### 1. Multi-Action Reducer

```javascript
function spellReducer(state, action) {
  switch (action.type) {
    case "ADD_SPELL":
      return { ...state, spells: [...state.spells, action.spell] };
    case "REMOVE_SPELL":
      return { ...state, spells: state.spells.filter((s) => s.id !== action.id) };
    case "UPGRADE_SPELL":
      return {
        ...state,
        spells: state.spells.map((s) =>
          s.id === action.id ? { ...s, power: s.power + 10 } : s
        ),
      };
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        spells: state.spells.map((s) =>
          s.id === action.id ? { ...s, isFavorite: !s.isFavorite } : s
        ),
      };
    default:
      return state;
  }
}
```

Four distinct actions, all handled in one place. Adding a fifth (e.g., `RESET`) is just another `case`.

### 2. Derived State

```javascript
const totalPower = state.spells.reduce((sum, s) => sum + s.power, 0);
const favoriteCount = state.spells.filter((s) => s.isFavorite).length;
```

Compute values from state rather than storing them separately. This avoids synchronization bugs.

### 3. Immutable Update Patterns

**Adding to an array:**
```javascript
[...state.spells, newSpell]
```

**Removing from an array:**
```javascript
state.spells.filter((s) => s.id !== action.id)
```

**Updating one item:**
```javascript
state.spells.map((s) =>
  s.id === action.id ? { ...s, power: s.power + 10 } : s
)
```

**Toggling a boolean:**
```javascript
state.spells.map((s) =>
  s.id === action.id ? { ...s, isFavorite: !s.isFavorite } : s
)
```

### 4. Mixing useReducer with useState

```javascript
const [state, dispatch] = useReducer(spellReducer, { spells: initialSpells });
const [newSpellName, setNewSpellName] = useState("");
```

The spell name input is local UI state — it doesn't belong in the reducer. Use `useState` for ephemeral form values and `useReducer` for the domain data.

## Benefits at Scale

1. **Centralized logic** — all state transitions in one function
2. **Testable** — pass state + action, assert on output (no React needed)
3. **Predictable** — same input always produces same output
4. **Easy to extend** — add new action types without touching existing ones

## Testing

1. Add a spell — appears in the list with power 20
2. Click "Upgrade +10" — power increases
3. Click "Favorite" / "Unfavorite" — star toggles
4. Click "Remove" — spell disappears
5. Stats (total spells, total power, favorites) update after every action
