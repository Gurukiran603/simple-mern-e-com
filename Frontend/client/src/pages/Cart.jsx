import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => setCart(JSON.parse(localStorage.getItem('cart') || '[]')), []);

  const changeQty = (id, qty) => {
    const updated = cart.map(i => i._id === id ? { ...i, qty } : i);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };
  const remove = (id) => {
    const updated = cart.filter(i => i._id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  if (!cart.length) return <div>Cart is empty</div>;
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(i => (
          <li key={i._id}>
            {i.name} - ₹{i.price} x
            <input type="number" value={i.qty} min="1" onChange={e => changeQty(i._id, Number(e.target.value))} />
            <button onClick={() => remove(i._id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>Total: ₹{total}</div>
    </div>
  );
}
