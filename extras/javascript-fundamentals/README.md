# JavaScript Fundamentals

## Overview

Before diving into React, you need a solid foundation in **core JavaScript**. React is just JavaScript with a few extra ideas on top, so if you can write clear, confident JS, React will feel natural.

This module covers the fundamentals: variables, conditionals, loops, functions, and objects. If you already know these well, skim through and jump to the exercises at the end.

## Variables

JavaScript has three ways to declare variables:

### `const` — Use by Default

```js
const name = "Merlin";
const maxSpells = 10;
const isWizard = true;

name = "Gandalf"; // Error: Assignment to constant variable
```

`const` doesn't mean the value is immutable — it means the **binding** can't be reassigned. Objects and arrays declared with `const` can still be modified:

```js
const wizard = { name: "Merlin", power: 100 };
wizard.power = 150; // This is fine
wizard = {}; // Error: can't reassign
```

### `let` — When You Need Reassignment

```js
let score = 0;
score = 10; // Fine
score += 5; // Fine

let health = 100;
health -= 25;
```

### `var` — Avoid This

`var` is function-scoped rather than block-scoped, which causes subtle bugs:

```js
// var leaks out of blocks
if (true) {
  var leaked = "oops";
}
console.log(leaked); // "oops" — still accessible

// let stays in its block
if (true) {
  let contained = "safe";
}
console.log(contained); // Error: not defined
```

**Rule of thumb:** Use `const` by default. Use `let` when you need to reassign. Never use `var`.

### Data Types

JavaScript has seven primitive types:

```js
const name = "Merlin";        // string
const power = 100;            // number
const isWizard = true;        // boolean
const nothing = null;          // null (intentional absence)
const notSet = undefined;      // undefined (not yet assigned)
const id = Symbol("unique");   // symbol
const bigNum = 9007199254740991n; // bigint
```

And one complex type:

```js
const wizard = { name: "Merlin" }; // object (includes arrays, functions, dates)
```

### Template Literals

Use backticks for string interpolation:

```js
const name = "Merlin";
const power = 100;

const greeting = `${name} has power level ${power}`;
const multiline = `
  Name: ${name}
  Power: ${power}
  Rating: ${power > 50 ? "Strong" : "Weak"}
`;
```

## Conditionals

### if / else if / else

```js
const power = 85;

if (power >= 100) {
  console.log("Legendary wizard");
} else if (power >= 50) {
  console.log("Skilled wizard");
} else {
  console.log("Apprentice");
}
```

### Comparison Operators

```js
// Strict equality (always use these)
5 === 5       // true
5 === "5"     // false
5 !== 10      // true

// Loose equality (avoid — causes surprises)
5 == "5"      // true (type coercion)
null == undefined // true

// Relational
power > 50
power >= 100
power < 25
power <= 0
```

### Logical Operators

```js
const hasWand = true;
const knowsSpells = true;
const isBanned = false;

// AND — both must be true
if (hasWand && knowsSpells) {
  console.log("Ready for battle");
}

// OR — at least one must be true
if (hasWand || knowsSpells) {
  console.log("Has some ability");
}

// NOT — flip the value
if (!isBanned) {
  console.log("Allowed to enter");
}
```

### Ternary Operator

A compact `if/else` that returns a value — you'll use this constantly in React:

```js
const power = 85;
const rank = power >= 100 ? "Master" : "Student";

// Nested (use sparingly)
const rank =
  power >= 100 ? "Master" :
  power >= 50  ? "Journeyman" :
                 "Apprentice";
```

### Switch

Use when comparing one value against many options:

```js
const house = "Liondudes";

switch (house) {
  case "Liondudes":
    console.log("Brave and bold");
    break;
  case "Serpent":
    console.log("Cunning and ambitious");
    break;
  case "Raven":
    console.log("Wise and creative");
    break;
  case "Badger":
    console.log("Loyal and patient");
    break;
  default:
    console.log("Unknown house");
}
```

### Truthy and Falsy

JavaScript treats some values as `false` in boolean contexts:

```js
// Falsy values (all of these are "false-ish")
false
0
"" (empty string)
null
undefined
NaN

// Everything else is truthy
"hello"   // truthy
42        // truthy
[]        // truthy (even empty arrays!)
{}        // truthy (even empty objects!)
```

This matters for short-circuit patterns you'll see in React:

```js
const spells = [];

// && short-circuit: returns first falsy value, or the last value
const message = spells.length && "Has spells";  // 0 (falsy)
const message2 = spells.length > 0 && "Has spells"; // false

// || short-circuit: returns first truthy value
const name = userInput || "Anonymous";

// ?? nullish coalescing: returns right side only if left is null/undefined
const count = 0;
count || 10;   // 10 (0 is falsy)
count ?? 10;   // 0 (0 is not null/undefined)
```

## Loops

### for Loop

The classic loop — you control the counter:

```js
const spells = ["Fireball", "Ice Shard", "Lightning", "Heal"];

for (let i = 0; i < spells.length; i++) {
  console.log(`${i + 1}. ${spells[i]}`);
}
// 1. Fireball
// 2. Ice Shard
// 3. Lightning
// 4. Heal
```

### for...of

Cleaner iteration over arrays (and other iterables):

```js
const spells = ["Fireball", "Ice Shard", "Lightning"];

for (const spell of spells) {
  console.log(spell);
}
```

### for...in

Iterates over object keys — use this for objects, not arrays:

```js
const wizard = {
  name: "Merlin",
  power: 100,
  house: "Liondudes",
};

for (const key in wizard) {
  console.log(`${key}: ${wizard[key]}`);
}
// name: Merlin
// power: 100
// house: Liondudes
```

### while / do...while

```js
// while — check first, then run
let mana = 100;
while (mana > 0) {
  console.log(`Mana: ${mana}`);
  mana -= 30;
}

// do...while — run first, then check (runs at least once)
let attempts = 0;
do {
  console.log(`Attempt ${attempts + 1}`);
  attempts++;
} while (attempts < 3);
```

### Array Methods (The Modern Way)

In practice, you'll use array methods far more than traditional loops — especially in React:

#### forEach

```js
const spells = ["Fireball", "Ice Shard", "Lightning"];

spells.forEach((spell, index) => {
  console.log(`${index + 1}. ${spell}`);
});
```

#### map — Transform Each Element

Returns a new array. This is the most important array method for React:

```js
const spells = ["Fireball", "Ice Shard", "Lightning"];
const shoutedSpells = spells.map((spell) => spell.toUpperCase());
// ["FIREBALL", "ICE SHARD", "LIGHTNING"]

const wizards = [
  { name: "Merlin", power: 100 },
  { name: "Morgana", power: 90 },
];
const names = wizards.map((w) => w.name);
// ["Merlin", "Morgana"]
```

#### filter — Keep Matching Elements

```js
const wizards = [
  { name: "Merlin", power: 100 },
  { name: "Apprentice", power: 20 },
  { name: "Morgana", power: 90 },
];

const powerful = wizards.filter((w) => w.power >= 50);
// [{ name: "Merlin", power: 100 }, { name: "Morgana", power: 90 }]
```

#### find — Get First Match

```js
const merlin = wizards.find((w) => w.name === "Merlin");
// { name: "Merlin", power: 100 }
```

#### reduce — Accumulate Into a Single Value

```js
const scores = [10, 25, 15, 30];
const total = scores.reduce((sum, score) => sum + score, 0);
// 80

const wizards = [
  { name: "Merlin", house: "Liondudes" },
  { name: "Morgana", house: "Serpent" },
  { name: "Ron", house: "Liondudes" },
];

const byHouse = wizards.reduce((groups, wizard) => {
  const house = wizard.house;
  groups[house] = groups[house] || [];
  groups[house].push(wizard);
  return groups;
}, {});
// { Liondudes: [{...}, {...}], Serpent: [{...}] }
```

#### Chaining Methods

```js
const wizards = [
  { name: "Merlin", power: 100, active: true },
  { name: "Apprentice", power: 20, active: true },
  { name: "Morgana", power: 90, active: false },
  { name: "Gandalf", power: 150, active: true },
];

const topActiveNames = wizards
  .filter((w) => w.active)
  .filter((w) => w.power >= 50)
  .map((w) => w.name)
  .sort();
// ["Gandalf", "Merlin"]
```

## Functions

### Function Declarations

```js
function castSpell(spellName) {
  return `${spellName} has been cast!`;
}

castSpell("Fireball"); // "Fireball has been cast!"
```

Declarations are **hoisted** — you can call them before they appear in the code.

### Function Expressions

```js
const castSpell = function (spellName) {
  return `${spellName} has been cast!`;
};
```

Expressions are **not hoisted** — you must define them before calling.

### Arrow Functions

The concise syntax you'll use most in React:

```js
// Full form
const castSpell = (spellName) => {
  return `${spellName} has been cast!`;
};

// Implicit return (single expression)
const castSpell = (spellName) => `${spellName} has been cast!`;

// Single parameter — parentheses optional
const double = (n) => n * 2;

// No parameters
const roll = () => Math.floor(Math.random() * 6) + 1;

// Returning an object (wrap in parentheses)
const createWizard = (name) => ({ name, power: 100 });
```

### Parameters

```js
// Default values
function greet(name = "stranger") {
  return `Hello, ${name}!`;
}
greet();        // "Hello, stranger!"
greet("Merlin"); // "Hello, Merlin!"

// Rest parameters (gather remaining args into an array)
function sumAll(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}
sumAll(1, 2, 3, 4); // 10
```

### Callbacks

A function passed as an argument to another function:

```js
function repeatAction(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

repeatAction(3, (i) => console.log(`Round ${i + 1}`));
// Round 1
// Round 2
// Round 3
```

You already saw callbacks with `map`, `filter`, `forEach`, and `reduce`.

### Closures

A function that remembers variables from its outer scope:

```js
function createCounter(start = 0) {
  let count = start;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter(10);
counter.increment(); // 11
counter.increment(); // 12
counter.getCount();  // 12
```

The inner functions "close over" the `count` variable — they remember it even after `createCounter` has finished running. This concept is fundamental to how React hooks work.

## Objects

### Object Literals

```js
const wizard = {
  name: "Merlin",
  power: 100,
  house: "Liondudes",
  spells: ["Fireball", "Lightning"],
};

// Access properties
wizard.name;          // "Merlin"
wizard["power"];      // 100

// Add / modify properties
wizard.level = 50;
wizard.power = 120;

// Delete properties
delete wizard.level;
```

### Shorthand Properties

When the variable name matches the key:

```js
const name = "Merlin";
const power = 100;

// Long form
const wizard = { name: name, power: power };

// Shorthand
const wizard = { name, power };
```

### Computed Property Names

```js
const field = "house";
const wizard = {
  name: "Merlin",
  [field]: "Liondudes",
};
// { name: "Merlin", house: "Liondudes" }
```

### Methods

Functions as object properties:

```js
const wizard = {
  name: "Merlin",
  mana: 100,
  castSpell(cost) {
    this.mana -= cost;
    return `${this.name} casts a spell! Mana: ${this.mana}`;
  },
};

wizard.castSpell(30); // "Merlin casts a spell! Mana: 70"
```

### Destructuring

Extract values from objects into variables — you'll use this everywhere in React:

```js
const wizard = {
  name: "Merlin",
  power: 100,
  house: "Liondudes",
};

// Destructure specific properties
const { name, power } = wizard;
console.log(name);  // "Merlin"
console.log(power); // 100

// Rename during destructuring
const { name: wizardName, house: wizardHouse } = wizard;

// Default values
const { level = 1 } = wizard; // level is 1 (not in wizard)

// Nested destructuring
const academy = {
  name: "Wizard Academy",
  location: { city: "London", country: "UK" },
};
const {
  location: { city },
} = academy;
console.log(city); // "London"
```

### Array Destructuring

```js
const spells = ["Fireball", "Ice Shard", "Lightning"];

const [first, second] = spells;
// first = "Fireball", second = "Ice Shard"

// Skip elements
const [, , third] = spells;
// third = "Lightning"

// Rest element
const [primary, ...rest] = spells;
// primary = "Fireball", rest = ["Ice Shard", "Lightning"]

// Swap variables
let a = 1;
let b = 2;
[a, b] = [b, a];
// a = 2, b = 1
```

### Spread Operator

Copies elements from one object or array into another:

```js
// Spread arrays
const basic = ["Fireball", "Heal"];
const advanced = ["Lightning", "Teleport"];
const allSpells = [...basic, ...advanced];
// ["Fireball", "Heal", "Lightning", "Teleport"]

// Add to array without mutating
const withNewSpell = [...basic, "Shield"];

// Spread objects
const wizard = { name: "Merlin", power: 100 };
const updated = { ...wizard, power: 150, level: 50 };
// { name: "Merlin", power: 150, level: 50 }
```

This is how you update state in React — never mutate, always spread:

```js
// Updating an object
const newWizard = { ...wizard, power: wizard.power + 10 };

// Updating an array
const newSpells = [...spells, "New Spell"];
const withoutFirst = spells.filter((_, i) => i !== 0);
```

### Optional Chaining

Safely access nested properties that might not exist:

```js
const wizard = {
  name: "Merlin",
  familiar: {
    name: "Archimedes",
    type: "owl",
  },
};

// Without optional chaining — crashes if familiar is null
wizard.familiar.name; // "Archimedes"

// With optional chaining — returns undefined instead of crashing
wizard.familiar?.name;   // "Archimedes"
wizard.pet?.name;        // undefined (no crash)
wizard.pet?.name ?? "No pet"; // "No pet"
```

### Useful Object Methods

```js
const wizard = { name: "Merlin", power: 100, house: "Liondudes" };

// Get all keys
Object.keys(wizard);   // ["name", "power", "house"]

// Get all values
Object.values(wizard);  // ["Merlin", 100, "Liondudes"]

// Get key-value pairs
Object.entries(wizard);
// [["name", "Merlin"], ["power", 100], ["house", "Liondudes"]]

// Check if key exists
"name" in wizard;      // true
wizard.hasOwnProperty("name"); // true
```

## Exercises

Each exercise has a `starter/` folder you can open directly in the browser — no build tools needed.

| # | Exercise | Topics |
|---|----------|--------|
| 1 | [Wizard Character Sheet](./exercise-01-variables/) | `const`, `let`, data types, template literals |
| 2 | [Wizard Classifier](./exercise-02-conditionals/) | `if`/`else`, ternary, logical operators, truthy/falsy |
| 3 | [Roster Analysis](./exercise-03-loops/) | `map`, `filter`, `find`, `reduce`, method chaining |
| 4 | [Spell Crafting](./exercise-04-functions/) | Arrow functions, defaults, callbacks, closures |
| 5 | [Wizard Inventory](./exercise-05-objects/) | Destructuring, spread, immutable updates |

## Why This Matters for React

Every concept here maps directly to React patterns:

| JS Fundamental       | React Usage                                    |
| -------------------- | ---------------------------------------------- |
| `const` / `let`      | Declaring components, state variables          |
| Template literals     | Dynamic class names, string interpolation      |
| Ternary operator      | Conditional rendering                          |
| `map` / `filter`     | Rendering lists                                |
| Arrow functions       | Event handlers, callbacks                      |
| Destructuring         | Props, state, context                          |
| Spread operator       | Immutable state updates                        |
| Closures              | Hooks (`useState`, `useEffect`)                |
| Optional chaining     | Safe access to API data                        |
| Object shorthand      | Passing props, creating state objects           |

If these concepts feel comfortable, you're ready for React.

---

**This is an extras module** — not part of the main course flow. Use it as a warm-up before Module 1, or as a reference whenever you need to brush up on vanilla JavaScript.
