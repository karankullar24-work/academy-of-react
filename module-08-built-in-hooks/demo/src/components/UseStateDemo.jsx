import { useState } from "react";

export function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="hook-demo">
      <h3>useState</h3>
      <p>Local component state</p>
      <div className="demo-content">
        <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
        {name && <p>Hello, {name}!</p>}
      </div>
    </div>
  );
}
