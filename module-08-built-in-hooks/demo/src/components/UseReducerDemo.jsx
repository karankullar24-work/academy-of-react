import { useReducer } from "react";

function wizardReducer(state, action) {
  switch (action.type) {
    case "ADD_WIZARD":
      return { ...state, wizards: [...state.wizards, action.wizard] };
    case "REMOVE_WIZARD":
      return {
        ...state,
        wizards: state.wizards.filter((w) => w.id !== action.id),
      };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

export function UseReducerDemo() {
  const [state, dispatch] = useReducer(wizardReducer, {
    wizards: [
      { id: 1, name: "Merlin", power: 100 },
      { id: 2, name: "Gandalf", power: 95 },
    ],
    filter: "",
  });

  const addWizard = () => {
    const id = Date.now();
    dispatch({
      type: "ADD_WIZARD",
      wizard: {
        id,
        name: `Wizard ${id % 1000}`,
        power: Math.floor(Math.random() * 100),
      },
    });
  };

  const filteredWizards = state.wizards.filter((w) =>
    w.name.toLowerCase().includes(state.filter.toLowerCase()),
  );

  return (
    <div className="hook-demo">
      <h3>useReducer</h3>
      <p>Complex state with actions</p>
      <div className="demo-content">
        <input
          placeholder="Filter wizards..."
          value={state.filter}
          onChange={(e) =>
            dispatch({ type: "SET_FILTER", filter: e.target.value })
          }
        />
        <button onClick={addWizard}>Add Wizard</button>
        <ul>
          {filteredWizards.map((w) => (
            <li key={w.id}>
              {w.name} (Power: {w.power})
              <button
                onClick={() => dispatch({ type: "REMOVE_WIZARD", id: w.id })}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
