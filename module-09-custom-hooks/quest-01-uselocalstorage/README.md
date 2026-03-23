# Quest 1: useLocalStorage

## Story Introduction

Wizards need their profile to persist between sessions! Create a custom hook that syncs state with localStorage so wizard names, houses, and levels survive page refreshes.

## Objective

Build a `useLocalStorage` hook that mirrors the `useState` API but persists values to localStorage. Use it to power a Wizard Profile form that remembers user data.

## Requirements

- Create `useLocalStorage(key, initialValue)` in a `hooks/` folder
- Hook returns `[storedValue, setValue]` — same signature as useState
- Initialize state from localStorage when key exists, otherwise use initialValue
- When setValue is called, update both React state and localStorage
- Use JSON.parse/JSON.stringify for serialization
- Support both value and function-updater form (like useState)

## Acceptance Criteria

- [ ] useLocalStorage hook created with correct API
- [ ] Profile state (name, house, level) uses useLocalStorage
- [ ] Dark mode toggle uses useLocalStorage
- [ ] Data persists after page refresh
- [ ] Reset button clears both state and localStorage

## Hints

<details>
<summary>Click to reveal hints</summary>

Use a lazy initializer with useState to read from localStorage on first render:

```jsx
const [storedValue, setStoredValue] = useState(() => {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
});
```

In your setValue function, write to both state and localStorage. Support the functional update form:

```jsx
const valueToStore = value instanceof Function ? value(storedValue) : value;
setStoredValue(valueToStore);
window.localStorage.setItem(key, JSON.stringify(valueToStore));
```

</details>

---

**Next**: [Quest 2: useFetch](../quest-02-usefetch/)
