# Quest 9 Solution: Spell Card Measurement with useLayoutEffect

## Overview

A spell card that measures its own dimensions synchronously after DOM updates, before the browser paints. This prevents the visual "flash" you'd get with `useEffect`.

## Key Concepts

### 1. Synchronous Measurement

```javascript
useLayoutEffect(() => {
  if (cardRef.current) {
    const rect = cardRef.current.getBoundingClientRect();
    setDimensions({ width: rect.width, height: rect.height });
  }
}, []);
```

`useLayoutEffect` fires after the DOM is updated but before the browser paints. This means measurements are captured and applied in the same frame — no flicker.

### 2. Resize Handling

```javascript
useLayoutEffect(() => {
  const measureCard = () => {
    const rect = cardRef.current.getBoundingClientRect();
    setDimensions({ width: rect.width, height: rect.height });
  };

  measureCard();
  window.addEventListener("resize", measureCard);
  return () => window.removeEventListener("resize", measureCard);
}, []);
```

The same cleanup pattern as `useEffect` — return a function to remove the listener.

### 3. useLayoutEffect vs useEffect

| `useEffect`                        | `useLayoutEffect`                   |
| ---------------------------------- | ----------------------------------- |
| Runs **after** paint               | Runs **before** paint               |
| Non-blocking (async)               | Blocking (sync)                     |
| Most side effects                  | DOM measurements, style corrections |
| Default choice                     | Only when you see flicker           |

### 4. When to Reach for useLayoutEffect

- Measuring element dimensions before display
- Adjusting scroll position
- Applying styles based on computed layout
- Tooltip or popover positioning

## Testing

1. Card dimensions display immediately (no flash)
2. Resize the browser window — dimensions update
3. Click "Add Content" — height adjusts

## What's Next

Quest 10 introduces `useDebugValue` for labeling custom hooks in React DevTools.
