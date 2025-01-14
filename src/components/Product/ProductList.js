import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/product';
import './ProductList.css';  // Importing the CSS file

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data.result);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="product-list-container">
            <h1 className="heading">All Products</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="product-card"
                    >
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        {product.image_url && (
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="product-image"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
