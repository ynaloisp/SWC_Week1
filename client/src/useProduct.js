import { useState, useEffect } from 'react';

function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/products',{
        mode: 'no-cors'
      })
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []); // Add closing parenthesis here
  return products;
}

export default useProducts;