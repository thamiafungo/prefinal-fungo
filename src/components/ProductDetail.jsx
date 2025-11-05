import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div>Product not found. <Link to='/'>Go back</Link></div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} width="200" alt="" />
      <p><b>Category:</b> {product.category}</p>
      <p><b>Description:</b> {product.description}</p>
      <p><b>Spec:</b> {product.spec}</p>
      <p><b>Rating:</b> ⭐{product.rating}</p>
      <p><b>Price:</b> ₱{product.price}</p>
      <p><b>Stock:</b> {product.quantity}</p>

      <Link to="/">⬅ Back</Link>
    </div>
  );
}
