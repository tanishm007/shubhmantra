import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', // Backend running on port 3000
});

// Cart APIs
export const getCart = (userId) => API.get(`/cart/${userId}`);
export const addItemToCart = (data) => API.post('/cart/addItemToCart', data);
export const removeItemFromCart = (userId, productId) =>
  API.delete(`/cart/removeItemFromCart/${userId}/${productId}`);

// Order APIs
export const getOrders = () => API.get('/order/view/all');
export const getOrdersByUser = (userId) => API.get(`/order/view/user/${userId}`);
export const getOrderById = (id) => API.get(`/order/view/${id}`);
export const createOrder = (data) => API.post('/order/add', data);
export const updateOrder = (id, data) => API.put(`/order/update/${id}`, data);
export const updateOrderStatus = (id, status) =>
  API.patch(`/order/status/${id}`, { status });
export const deleteOrder = (id) => API.delete(`/order/delete/${id}`);
export const filterOrdersByStatus = (status) =>
  API.get(`/order/filter?status=${status}`);
