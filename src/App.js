import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import AddProductPage from './pages/AddProductPage';
import AdminSignIn from './pages/AdminSignIn';
import AdminSignUp from './pages/AdminSignUp';

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/add-product" element={<AddProductPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/admin/signUp" element={<AdminSignUp />} />
                <Route path="/admin/signIn" element={<AdminSignIn />} />
            </Routes>
        </Router>
    );
};

export default App;
