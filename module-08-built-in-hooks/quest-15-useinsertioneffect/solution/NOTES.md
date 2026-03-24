# Quest 15 Solution: Spell Styles with useInsertionEffect

## Overview

Dynamic CSS rules are injected into the document based on the selected spell type. `useInsertionEffect` ensures styles are inserted before any layout effects read from the DOM, preventing layout thrashing.

## Key Concepts

### 1. Injecting Styles Dynamically

```javascript
useInsertionEffect(() => {
  let styleEl = document.getElementById("dynamic-spell-styles");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "dynamic-spell-styles";
    document.head.appendChild(styleEl);
  }

  styleEl.textContent = `
    .spell-${spellType} {
      background: ${colors[spellType]};
      box-shadow: 0 0 20px ${colors[spellType]};
    }
  `;
}, [spellType]);
```

The style tag is created or updated before `useLayoutEffect` or `useEffect` run.

### 2. Effect Ordering

```
useInsertionEffect  →  useLayoutEffect  →  useEffect
     (styles)           (measurements)     (side effects)
```

This ordering guarantees that when `useLayoutEffect` measures the DOM, the correct styles are already applied.

### 3. When to Use useInsertionEffect

Almost never. This hook exists for CSS-in-JS library authors (styled-components, Emotion, etc.) who need to inject `<style>` tags at exactly the right time.

| Hook                   | Purpose                        |
| ---------------------- | ------------------------------ |
| `useInsertionEffect`   | Inject CSS before layout reads |
| `useLayoutEffect`      | Measure/mutate DOM before paint|
| `useEffect`            | Everything else (data, timers) |

## Testing

1. Click Fire / Ice / Lightning — card color and glow change
2. Click "Force Re-render" — styles stay correct, no flash
3. Open console — logs show insertion effect firing

## What's Next

Quest 16 moves to `useRef` for DOM access patterns — auto-focusing inputs and imperative control.
