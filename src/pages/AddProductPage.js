import React, { useState } from 'react';
import { addProduct } from '../api/addProduct';
import { useNavigate } from 'react-router-dom';
import './AddProductPage.css';  // Importing the CSS file

const AddProductPage = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        material: '',
        size: '',
        stock: '',
        image_url: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addProduct(formData);
            setMessage('Product added successfully!');
            setFormData({
                name: '',
                description: '',
                price: '',
                category: '',
                material: '',
                size: '',
                stock: '',
                image_url: '',
            });
            console.log(response);
            navigate('/add-product');
        } catch (err) {
            console.error(err);
            setMessage('Failed to add product.');
        }
    };

    return (
        <div className="add-product-container">
            <h1>Add New Product</h1>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit} className="product-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Category ID:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Material:</label>
                    <input
                        type="text"
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Size:</label>
                    <input
                        type="text"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Stock:</label>
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image_url"
                        value={formData.image_url}
                        onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <button type="submit" className="submit-btn">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductPage;
