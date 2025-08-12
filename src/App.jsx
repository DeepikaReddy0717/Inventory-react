import React, { useState } from "react";
import InventoryList from "./components/InventoryList";
import InventoryForm from "./components/InventoryForm";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, quantity: 5 },
    { id: 2, name: "Shirt", category: "Clothing", price: 1200, quantity: 20 }
  ]);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  return (
    <div className="container mt-4">
      <h1>Inventory Management</h1>
      <InventoryForm onAdd={addItem} />
      <InventoryList items={items} onDelete={deleteItem} onUpdate={updateItem} />
    </div>
  );
}

export default App;
