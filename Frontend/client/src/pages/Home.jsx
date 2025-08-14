import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(i => i._id === product._id);
    if (existing) existing.qty += 1;
    else cart.push({ ...product, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
      {products.map(p => (
        <div key={p._id} style={{ border: '1px solid #ddd', padding: 10, borderRadius: 6 }}>
          <Link to={`/product/${p._id}`}><h3>{p.name}</h3></Link>
          <p>{p.description?.slice(0, 80)}</p>
          <div>₹{p.price}</div>
          <div style={{ marginTop: 8 }}>
            <button onClick={() => addToCart(p)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
