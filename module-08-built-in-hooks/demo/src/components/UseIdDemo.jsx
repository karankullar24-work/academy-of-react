import { useId } from "react";

export function UseIdDemo() {
  const emailId = useId();
  const passwordId = useId();

  return (
    <div className="hook-demo">
      <h3>useId</h3>
      <p>Generate unique IDs (SSR-safe)</p>
      <div className="demo-content">
        <div className="form-field">
          <label htmlFor={emailId}>Email</label>
          <input id={emailId} type="email" placeholder="wizard@academy.com" />
        </div>
        <div className="form-field">
          <label htmlFor={passwordId}>Password</label>
          <input id={passwordId} type="password" placeholder="••••••••" />
        </div>
        <p className="hint">
          IDs: {emailId}, {passwordId}
        </p>
      </div>
    </div>
  );
}
