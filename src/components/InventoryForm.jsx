import React, { useState } from "react";

function InventoryForm({ onAdd }) {
  const [formData, setFormData] = useState({ name: "", category: "", price: "", quantity: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, price: parseFloat(formData.price), quantity: parseInt(formData.quantity) });
    setFormData({ name: "", category: "", price: "", quantity: "" });
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="form-control mb-2" required />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="form-control mb-2" required />
      <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} className="form-control mb-2" required />
      <input name="quantity" type="number" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="form-control mb-2" required />
      <button className="btn btn-primary" type="submit">Add Item</button>
    </form>
  );
}

export default InventoryForm;
