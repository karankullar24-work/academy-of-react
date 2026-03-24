import { useState, useEffect } from "react";

export function UseEffectDemo() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="hook-demo">
      <h3>useEffect</h3>
      <p>Side effects & cleanup</p>
      <div className="demo-content">
        <p className="timer">{seconds}s</p>
        <button onClick={() => setRunning(!running)}>
          {running ? "Stop" : "Start"} Timer
        </button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    </div>
  );
}
