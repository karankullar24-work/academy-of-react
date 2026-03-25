import { useState, useCallback } from "react";

export function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked! Count:", count);
  }, [count]);

  return (
    <div className="hook-demo">
      <h3>useCallback</h3>
      <p>Memoize functions</p>
      <div className="demo-content">
        <button onClick={handleClick}>Log Count</button>
        <button onClick={() => setCount((c) => c + 1)}>
          Increment ({count})
        </button>
        <p className="hint">Function reference stable between renders</p>
      </div>
    </div>
  );
}
