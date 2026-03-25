# Quest 13 Solution: Spell Power Slider with useDeferredValue

## Overview

A power slider that controls an expensive particle visualization. The slider uses the immediate value for responsiveness, while the heavy render uses a deferred copy that lags behind during rapid changes.

## Key Concepts

### 1. Creating a Deferred Value

```javascript
const [power, setPower] = useState(50);
const deferredPower = useDeferredValue(power);
```

`deferredPower` eventually equals `power`, but during rapid updates it falls behind so React can keep the UI responsive.

### 2. Splitting Immediate and Deferred Rendering

```jsx
<input value={power} onChange={(e) => setPower(Number(e.target.value))} />
<SpellParticles power={deferredPower} />
```

The slider reads `power` directly (always up to date). The expensive component reads `deferredPower` (may lag during fast dragging).

### 3. Detecting the Lag

```jsx
<p>
  Deferred Power: {deferredPower}
  {power !== deferredPower && " (catching up...)"}
</p>
```

When the two values differ, a transition is in progress.

## useDeferredValue vs useTransition

| `useTransition`                   | `useDeferredValue`                |
| --------------------------------- | --------------------------------- |
| Wraps a **state update**          | Wraps a **value**                 |
| You control the `setState` call   | You receive a value from outside  |
| `startTransition(() => setState)` | `useDeferredValue(prop)`          |

Use `useDeferredValue` when you don't control the state update — for example, when a value comes through props.

## Testing

1. Drag the slider quickly — it should move smoothly
2. Watch the deferred value lag behind during fast drags
3. "catching up..." message appears during transitions
4. Particles re-render only when deferred value settles

## What's Next

Quest 14 introduces `useSyncExternalStore` for safely subscribing to data sources outside React.
