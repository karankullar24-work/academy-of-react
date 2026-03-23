// TODO: Create a wizard object with properties:
// - name
// - house
// - level
// - specialty
// (Add more properties as needed)

// TODO: Create React elements using React.createElement()
// to display the wizard's information

// TODO: Render your React elements
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Your React elements go here
  React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Wizard Identity"),
    React.createElement("p", null, "Start building your wizard profile!"),
  ),
);
