import { useState, useMemo, useTransition } from "react";

export function UseTransitionDemo() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [items, setItems] = useState([]);

  const allItems = useMemo(
    () =>
      Array.from(
        { length: 5000 },
        (_, i) =>
          `Spell #${i + 1}: ${["Fireball", "Ice Shard", "Lightning", "Heal", "Shield"][i % 5]}`,
      ),
    [],
  );

  const handleSearch = (value) => {
    setQuery(value);

    startTransition(() => {
      const filtered = allItems.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      );
      setItems(filtered.slice(0, 100));
    });
  };

  return (
    <div className="hook-demo">
      <h3>useTransition</h3>
      <p>Non-blocking UI updates</p>
      <div className="demo-content">
        <input
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search 5000 spells..."
        />
        {isPending && <span className="pending">Searching...</span>}
        <ul className="spell-list">
          {items.slice(0, 5).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          {items.length > 5 && <li>...and {items.length - 5} more</li>}
        </ul>
      </div>
    </div>
  );
}
