# Quest 3 Solution: Theme Switcher with useContext

## Overview

A theme system where Header, Content, and Footer components all access theme state through context rather than props. Demonstrates `createContext`, `Provider`, and `useContext`.

## Key Concepts

### 1. Creating a Context

```javascript
const ThemeContext = createContext();
```

Creates a context object. Components that consume it will read from the nearest matching Provider above them in the tree.

### 2. Providing a Value

```javascript
<ThemeContext.Provider value={{ theme, toggleTheme }}>
  <Header />
  <Content />
  <Footer />
</ThemeContext.Provider>
```

The Provider wraps the subtree that needs access. Any component inside can consume the value — no matter how deeply nested.

### 3. Consuming with useContext

```javascript
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
}
```

`useContext` reads the current value and re-renders when the provider's value changes.

### 4. No Prop Drilling

Without context, `theme` would need to be passed through every intermediate component. With context, any descendant can access it directly.

## When to Use useContext

| Good Fit                            | Consider Something Else         |
| ----------------------------------- | ------------------------------- |
| Theme, locale, auth state           | Frequently changing values      |
| Data needed by many components      | Data used by one or two nearby  |
| Avoiding deep prop chains           | Simple parent-child data flow   |

## Testing

1. Click toggle — all three sections (Header, Content, Footer) update
2. Theme class applies to the entire app wrapper
3. No props are passed between components for theme data

## What's Next

Quest 4 introduces `useReducer` for managing more complex state through actions.
