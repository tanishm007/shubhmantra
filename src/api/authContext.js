import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create Context
const AuthContext = createContext();

// Create a custom hook to use AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider to wrap your application
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if admin is authenticated from localStorage or session
        const admin = localStorage.getItem('admin');
        if (admin) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = (adminData) => {
        localStorage.setItem('admin', JSON.stringify(adminData)); // Save admin data to localStorage
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('admin'); // Remove admin data from localStorage
        setIsAuthenticated(false);
        navigate('/admin/signIn');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
