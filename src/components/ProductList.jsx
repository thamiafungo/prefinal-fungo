import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList({ products, setProducts }) {
  const [filter, setFilter] = useState("");

  const changeQty = (id, amount) => {
    setProducts(
      products.map((p) => {
        if (p.id === id) {
          const newQty = p.quantity + amount;
          if (newQty < 0) return p;
          return { ...p, quantity: newQty };
        }
        return p;
      })
    );
  };

  const filtered = filter
    ? products.filter((p) => p.category === filter)
    : products;

  const total = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  return (
    <div>
      <div className="header">
        <div>
          <label>Filter:&nbsp;</label>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="">All Category</option>
            <option value="Beans">Beans</option>
            <option value="Ground">Ground</option>
            <option value="Drink">Drink</option>
          </select>
        </div>
        <div>
          <strong>Total: ₱{total}</strong>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr
              key={p.id}
              className={p.quantity < 5 ? "low-stock" : ""}
            >
              <td>
                <img className="product-image" src={p.image} alt={p.name} />
              </td>
              <td>
                <Link to={`/product/${p.id}`}>{p.name}</Link>
              </td>
              <td>{p.category}</td>
              <td>₱{p.price}</td>
              <td>{p.quantity}</td>
              <td>₱{p.price * p.quantity}</td>
              <td>
                <button onClick={() => changeQty(p.id, 1)}>+</button>
                <button onClick={() => changeQty(p.id, -1)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
