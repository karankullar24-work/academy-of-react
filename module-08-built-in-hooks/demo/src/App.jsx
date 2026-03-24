import { UseStateDemo } from "./components/UseStateDemo";
import { UseReducerDemo } from "./components/UseReducerDemo";
import { UseRefDemo } from "./components/UseRefDemo";
import { UseEffectDemo } from "./components/UseEffectDemo";
import { UseMemoDemo } from "./components/UseMemoDemo";
import { UseCallbackDemo } from "./components/UseCallbackDemo";
import { UseIdDemo } from "./components/UseIdDemo";
import { UseTransitionDemo } from "./components/UseTransitionDemo";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>🪝 Built-in React Hooks</h1>
        <p>Interactive demo of React's built-in hooks</p>
      </header>

      <div className="hooks-grid">
        <UseStateDemo />
        <UseReducerDemo />
        <UseRefDemo />
        <UseEffectDemo />
        <UseMemoDemo />
        <UseCallbackDemo />
        <UseIdDemo />
        <UseTransitionDemo />
      </div>

      <footer>
        <p>💡 Open browser console to see hook effects</p>
      </footer>
    </div>
  );
}

export default App;
