# Quest 3: useDebounce

## Story Introduction

Searching the spell library on every keystroke is wasteful! Create a `useDebounce` hook that delays updating a value until the user stops typing — perfect for search inputs and API calls.

## Objective

Build a `useDebounce(value, delay)` hook that returns a debounced version of any value. Use it to optimize the spell search so filtering only runs after the user pauses typing.

## Requirements

- Create `useDebounce(value, delay)` in a `hooks/` folder
- Accept a value and delay in milliseconds
- Return the debounced value (updates only after delay passes)
- Reset the timer if value changes before delay completes
- Clean up timeout on unmount or when dependencies change

## Acceptance Criteria

- [ ] useDebounce hook returns debounced value
- [ ] Search input uses useDebounce for filtering
- [ ] "Searching for" and search count update only after typing stops
- [ ] No memory leaks (timeout cleared on cleanup)
- [ ] Noticeable delay (e.g. 300–500ms) before debounced value updates

## Hints

<details>
<summary>Click to reveal hints</summary>

Use useState for the debounced value and useEffect with setTimeout:

```jsx
const [debouncedValue, setDebouncedValue] = useState(value);

useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedValue(value);
  }, delay);

  return () => clearTimeout(handler);  // Cleanup!
}, [value, delay]);

return debouncedValue;
```

The cleanup function is critical — it clears the pending timeout when value or delay changes, or when the component unmounts.

</details>

## Bonus

- Add a configurable delay input so users can test different debounce times
- Show a "typing" indicator that disappears when debounced value catches up

---

**Previous**: [Quest 2: useFetch](../quest-02-usefetch/)
