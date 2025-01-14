import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';


const AdminSignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/admin/signIn', formData);
            setMessage('Admin signed in successfully!');
            navigate('/add-product');
        } catch (err) {
            setMessage('Failed to sign in');
        }
    };

    return (
        <div className="form-container">
            <h2>Admin Sign In</h2>
            {message && <p className={message.includes('success') ? 'success' : ''}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <a href="/admin/signUp">Don't have an account? Sign Up</a>
        </div>
    );
};

export default AdminSignIn;
