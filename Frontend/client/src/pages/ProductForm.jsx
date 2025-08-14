import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function ProductForm() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/products', { name, description: desc, price: Number(price), imageUrl });
      nav('/');
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 600 }}>
      <h2>New Product</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div><label>Name</label><input value={name} onChange={e => setName(e.target.value)} required /></div>
      <div><label>Description</label><textarea value={desc} onChange={e => setDesc(e.target.value)} /></div>
      <div><label>Price</label><input type="number" value={price} onChange={e => setPrice(e.target.value)} required /></div>
      <div><label>Image URL</label><input value={imageUrl} onChange={e => setImageUrl(e.target.value)} /></div>
      <button type="submit">Create</button>
    </form>
  );
}

/*
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function ProductForm() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);

  const nav = useNavigate();

  // 🔹 Redirect to login if not logged in
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      nav('/login');
    }
  }, [nav]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/products', { name, description: desc, price: Number(price), imageUrl });
      nav('/');
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 600 }}>
      <h2>New Product</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div><label>Name</label><input value={name} onChange={e => setName(e.target.value)} required /></div>
      <div><label>Description</label><textarea value={desc} onChange={e => setDesc(e.target.value)} /></div>
      <div><label>Price</label><input type="number" value={price} onChange={e => setPrice(e.target.value)} required /></div>
      <div><label>Image URL</label><input value={imageUrl} onChange={e => setImageUrl(e.target.value)} /></div>
      <button type="submit">Create</button>
    </form>
  );
}
*/