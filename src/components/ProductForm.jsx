import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductForm({ addProduct }) {
  const [input, setInput] = useState({
    name: "", image: "", category: "", description: "",
    spec: "", rating: "", price: "", quantity: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  const submit = (e) => {
    e.preventDefault();
    for (let x in input) if (!input[x]) return alert("All fields required!");
    addProduct({...input, price: Number(input.price), quantity: Number(input.quantity), rating: Number(input.rating)});
    alert("Product Added!");
    navigate("/");
  };

  return (
    <form onSubmit={submit} className="form-grid">
      <input name="image" placeholder="Image URL" value={input.image} onChange={handleChange} />
      <input name="name" placeholder="Product Name" value={input.name} onChange={handleChange} />
      <input name="category" placeholder="Category" value={input.category} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={input.description} onChange={handleChange} />
      <input name="spec" placeholder="Specification" value={input.spec} onChange={handleChange} />
      <input name="rating" placeholder="Rating (1-5)" value={input.rating} onChange={handleChange} />
      <input name="price" placeholder="Price" value={input.price} onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" value={input.quantity} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
}
