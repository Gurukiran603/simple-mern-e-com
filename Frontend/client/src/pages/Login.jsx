/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      nav('/');
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 400 }}>
      <h2>Login</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div><label>Email</label><input value={email} onChange={e => setEmail(e.target.value)} required /></div>
      <div><label>Password</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} required /></div>
      <button type="submit">Login</button>
    </form>
  );
}
*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      nav('/');
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  // 🔹 Quick Register Admin button
  const quickRegisterAdmin = async () => {
    try {
      const res = await API.post('/auth/register', {
        name: "Admin",
        email: "admin@example.com",
        password: "123456"
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert("✅ Admin registered and logged in!");
      nav('/');
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Login</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={submit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>

      <hr />

      {/* 🔹 Quick Register Admin Button */}
      <button onClick={quickRegisterAdmin} style={{ background: 'green', color: 'white', marginTop: 10 }}>
        Quick Register Admin
      </button>
    </div>
  );
}
