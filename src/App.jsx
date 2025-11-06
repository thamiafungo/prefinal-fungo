import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./components/ProductDetail";

export default function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Arabica Coffee Beans",
      image:
        "https://www.foodandwine.com/thmb/XbKXqQvF61Csj9XLs_Nj3xwlwEI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Everything-You-Need-To-Know-About-Arabica-Coffee-FT-BLOG0822-2000-127d1551916e45138ea373de75f08138.jpg",
      category: "Beans",
      description: "Premium Arabica roasted beans.",
      spec: "Whole Beans",
      rating: 5,
      price: 250,
      quantity: 3,
    },
    {
      id: 2,
      name: "Espresso Blend Ground Coffee",
      image:
        "https://m.media-amazon.com/images/I/61qakS3NcAL._SL1200_.jpg",
      category: "Ground",
      description: "Bold espresso blend ground coffee.",
      spec: "250g Pack",
      rating: 4,
      price: 280,
      quantity: 2,
    },
    {
      id: 3,
      name: "Caramel Latte",
      image:
        "https://www.bing.com/th/id/OIP.wb4ryQjc1VpT2Yb_LCSHkgHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      category: "Drink",
      description: "Sweet caramel flavored latte.",
      spec: "16oz Cup",
      rating: 5,
      price: 150,
      quantity: 8,
    },
  ]);

  const addProduct = (product) => {
    setProducts([...products, { id: Date.now(), ...product }]);
  };

  return (
    <div className="container">
      <h2>☕ Coffee Product Management App</h2>

      <nav>
        <Link to="/">Products</Link> | <Link to="/add">Add Product</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} setProducts={setProducts} />}
        />
        <Route path="/add" element={<ProductForm addProduct={addProduct} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
      </Routes>
    </div>
  );
}
