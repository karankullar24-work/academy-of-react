# Quest 7 Solution: Spell Input Focus with useRef

## Overview

A text input with "Focus" and "Select All" buttons that imperatively control the DOM element. Demonstrates `useRef` for holding a reference to a DOM node.

## Key Concepts

### 1. Creating a Ref

```javascript
const inputRef = useRef(null);
```

`useRef` returns an object with a `.current` property. It's initialized to `null` and gets assigned to the DOM element after mount.

### 2. Attaching to the DOM

```jsx
<input ref={inputRef} type="text" placeholder="Enter spell name..." />
```

React sets `inputRef.current` to the actual `<input>` DOM node after rendering.

### 3. Imperative DOM Methods

```javascript
const focusInput = () => {
  inputRef.current.focus();
};

const selectAll = () => {
  inputRef.current.select();
};
```

Refs give you direct access to DOM APIs like `.focus()`, `.select()`, `.scrollIntoView()`, etc. — things you can't do declaratively through props.

### 4. Refs Don't Trigger Re-renders

Changing `ref.current` does **not** cause a re-render. This is the key difference from state:

| `useState`                        | `useRef`                          |
| --------------------------------- | --------------------------------- |
| Triggers re-render on update      | No re-render on update            |
| For data that affects the UI      | For DOM access or mutable values  |
| Value captured per render         | `.current` is always latest       |

## Testing

1. Click "Focus Input" — input gains focus
2. Type some text, click "Select All" — text is selected
3. No re-renders from ref operations (no flashing)

## What's Next

Quest 8 introduces `useImperativeHandle` for customizing what a parent can do with a child's ref.
