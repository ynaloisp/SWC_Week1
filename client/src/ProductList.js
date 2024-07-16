// src/components/ProductList.js
import React, { useState, useEffect } from 'react';

const URL = 'http://localhost:3001/api/products';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL);
            const data = await result.json();
            setProducts(data);
            console.log(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default ProductList;
