import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import ProductForm from './pages/ProductForm';
import Cart from './pages/Cart';

export default function App() {
  return (
    <div>
      <nav style={{ padding: 10, borderBottom: '1px solid #ddd' }}>
        <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> | <Link to="/admin/new">Add Product</Link> | <Link to="/login">Login</Link>
      </nav>
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/new" element={<ProductForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}
