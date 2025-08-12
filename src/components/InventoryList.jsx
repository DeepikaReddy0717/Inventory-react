import React, { useState } from "react";
import InventoryEditForm from "./InventoryEditForm";

function InventoryList({ items, onDelete, onUpdate }) {
  const [editingItem, setEditingItem] = useState(null);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item =>
          editingItem && editingItem.id === item.id ? (
            <InventoryEditForm key={item.id} item={item} onUpdate={onUpdate} onCancel={() => setEditingItem(null)} />
          ) : (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => setEditingItem(item)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default InventoryList;
