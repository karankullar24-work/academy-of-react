import { useRef } from "react";

export function UseRefDemo() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  renderCount.current += 1;

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="hook-demo">
      <h3>useRef</h3>
      <p>DOM access & mutable values</p>
      <div className="demo-content">
        <input ref={inputRef} placeholder="Click button to focus me" />
        <button onClick={focusInput}>Focus Input</button>
        <p className="hint">
          Render count: {renderCount.current} (doesn't cause re-render)
        </p>
      </div>
    </div>
  );
}
