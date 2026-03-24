import { useState, useMemo } from "react";

export function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [numbers] = useState(() => Array.from({ length: 1000 }, (_, i) => i));

  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);

  return (
    <div className="hook-demo">
      <h3>useMemo</h3>
      <p>Memoize expensive calculations</p>
      <div className="demo-content">
        <p>Sum of 1-1000: {sum.toLocaleString()}</p>
        <button onClick={() => setCount((c) => c + 1)}>
          Re-render ({count})
        </button>
        <p className="hint">Check console - sum only calculates once!</p>
      </div>
    </div>
  );
}
