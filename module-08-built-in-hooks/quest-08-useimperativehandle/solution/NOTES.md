# Quest 8 Solution: Custom Spell Input with useImperativeHandle

## Overview

A `SpellInput` component exposes only `focus()`, `clear()`, and `getValue()` to the parent — hiding internal implementation details. Demonstrates `useImperativeHandle` with `forwardRef`.

## Key Concepts

### 1. forwardRef

```javascript
const SpellInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  // ...
});
```

`forwardRef` lets the parent pass a `ref` into a child component. Without it, the `ref` prop is not forwarded.

### 2. Customizing the Ref API

```javascript
useImperativeHandle(ref, () => ({
  focus: () => inputRef.current.focus(),
  clear: () => { inputRef.current.value = ""; },
  getValue: () => inputRef.current.value,
}));
```

Instead of exposing the raw DOM node, you define a custom API. The parent can only call the methods you choose to expose.

### 3. Parent Usage

```javascript
const spellInputRef = useRef(null);

spellInputRef.current.focus();
spellInputRef.current.clear();
const value = spellInputRef.current.getValue();
```

The parent interacts with the child through a clean, controlled interface.

### 4. Encapsulation

The parent never touches the real `<input>` element. The child could swap its internal DOM structure without breaking the parent's code.

## When to Use useImperativeHandle

- Building reusable form components with imperative APIs
- Wrapping third-party libraries that need imperative control
- Exposing animation or media control methods

## Testing

1. Click "Focus Input" — input gains focus
2. Type text, click "Clear Input" — input is cleared
3. Type text, click "Get Value" — alert shows current value

## What's Next

Quest 9 introduces `useLayoutEffect` for synchronous DOM measurements before the browser paints.
