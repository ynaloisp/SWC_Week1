import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProductList = () => { 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:3001/api/products');
      setProducts(response.data);
    }
    getProducts();
  }, [])

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h1>{product.name}</h1>
          <p>{product.quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList
