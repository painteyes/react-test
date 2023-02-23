import React, { useState } from "react";

function ListComponent({ items, onSelect }) {
  const [selected, setSelected] = useState([]);

  const handleSelect = (index) => {
    const isSelected = selected.includes(index);
    const newSelected = isSelected
      ? selected.filter((i) => i !== index)
      : [...selected, index];
    setSelected(newSelected);

    const selectedItems = newSelected.map((i) => items[i]);
    onSelect(selectedItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item.id}
          onClick={() => handleSelect(index)}
          style={{
            background: selected.includes(index) ? "lightblue" : "white",
          }}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}

function SelectionComponent({ selected }) {
  return (
    <div>
      <h2>Elementi selezionati:</h2>
      <ul>
        {selected.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const items = [
    { id: 1, label: "Elemento 1" },
    { id: 2, label: "Elemento 2" },
    { id: 3, label: "Elemento 3" },
  ];

  const [selected, setSelected] = useState([]);

  const handleSelectionChange = (newSelected) => {
    setSelected(newSelected);
  };

  return (
    <div>
      <h1>Seleziona gli elementi:</h1>
      <ListComponent items={items} onSelect={handleSelectionChange} />
      <SelectionComponent selected={selected} />
    </div>
  );
}

export default App;
