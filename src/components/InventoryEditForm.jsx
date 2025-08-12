import React, { useState } from "react";

function InventoryEditForm({ item, onUpdate, onCancel }) {
  const [formData, setFormData] = useState(item);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...formData, price: parseFloat(formData.price), quantity: parseInt(formData.quantity) });
    onCancel();
  };

  return (
    <tr>
      <td><input name="name" value={formData.name} onChange={handleChange} className="form-control" /></td>
      <td><input name="category" value={formData.category} onChange={handleChange} className="form-control" /></td>
      <td><input name="price" type="number" value={formData.price} onChange={handleChange} className="form-control" /></td>
      <td><input name="quantity" type="number" value={formData.quantity} onChange={handleChange} className="form-control" /></td>
      <td>
        <button className="btn btn-success btn-sm me-2" onClick={handleSubmit}>Save</button>
        <button className="btn btn-secondary btn-sm" onClick={onCancel}>Cancel</button>
      </td>
    </tr>
  );
}

export default InventoryEditForm;
