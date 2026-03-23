# Quest 2: useFetch

## Story Introduction

The spell academy needs to load spell data from the API! Extract the common fetching logic into a reusable `useFetch` hook so any component can fetch data with proper loading and error states.

## Objective

Create a `useFetch(url)` hook that handles data fetching, loading state, error handling, and manual refetch. Replace the inline fetch logic in the App with your custom hook.

## Requirements

- Create `useFetch(url)` in a `hooks/` folder
- Return `{ data, loading, error, refetch }`
- Fetch data when the URL changes (useEffect dependency)
- Handle loading state (start true, set false when done)
- Handle errors (try/catch, set error state)
- Provide refetch function to manually trigger a new fetch

## Acceptance Criteria

- [ ] useFetch hook returns data, loading, error, refetch
- [ ] Loading state shows spinner while fetching
- [ ] Error state displays error message
- [ ] Successful fetch displays spell grid
- [ ] Refetch button triggers new fetch without page reload
- [ ] Hook re-fetches when URL changes

## Hints

<details>
<summary>Click to reveal hints</summary>

Use a refetchTrigger state to enable manual refetch — include it in the useEffect dependency array:

```jsx
const [refetchTrigger, setRefetchTrigger] = useState(0);

useEffect(() => {
  const fetchData = async () => { /* ... */ };
  fetchData();
}, [url, refetchTrigger]);

const refetch = () => setRefetchTrigger(prev => prev + 1);
return { data, loading, error, refetch };
```

Check response.ok before parsing:

```jsx
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
```

</details>

---

**Next**: [Quest 3: useDebounce](../quest-03-usedebounce/)
