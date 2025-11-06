import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return (
      <div>
        <p>Product not found.</p>
        <Link to="/">⬅ Back</Link>
      </div>
    );

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <img
        src={product.image}
        width="200"
        height="200"
        alt={product.name}
        style={{ borderRadius: "10px", marginBottom: "15px" }}
      />
      <p><b>Category:</b> {product.category}</p>
      <p><b>Description:</b> {product.description}</p>
      <p><b>Specification:</b> {product.spec}</p>
      <p><b>Rating:</b> ⭐ {product.rating}</p>
      <p><b>Price:</b> ₱{product.price}</p>
      <p><b>Available Quantity:</b> {product.quantity}</p>

      <Link to="/" style={{ textDecoration: "none", color: "#6b3e26" }}>
        ⬅ Back to Products
      </Link>
    </div>
  );
}
