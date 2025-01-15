import React, { useEffect, useState } from 'react';
import { getCart, removeItemFromCart } from '../../services/api';

const Cart = ({ userId }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await getCart(userId);
        setCart(data.cartdetails);
      } catch (error) {
        console.error('Error fetching cart:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [userId]);

  const handleRemoveItem = async (productId) => {
    try {
      await removeItemFromCart(userId, productId);
      setCart((prev) => ({
        ...prev,
        items: prev.items.filter((item) => item.productId._id !== productId),
      }));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart?.items.length > 0 ? (
        cart.items.map((item) => (
          <div key={item.productId._id}>
            <p>{item.productId.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleRemoveItem(item.productId._id)}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h3>Total: ${cart?.totalprice}</h3>
    </div>
  );
};

export default Cart;
