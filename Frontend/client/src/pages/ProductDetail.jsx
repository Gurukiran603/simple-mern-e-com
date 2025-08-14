import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get(`/products/${id}`).then(res => setProduct(res.data)).catch(err => console.error(err));
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(i => i._id === product._id);
    if (existing) existing.qty += 1;
    else cart.push({ ...product, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
  };

  if (!product) return <div>Loading...</div>;
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div>₹{product.price}</div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}
