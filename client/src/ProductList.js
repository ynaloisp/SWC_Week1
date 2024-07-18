// import axios from "axios";
import React from 'react';
import useProducts from './useProduct';

function ProductList() {
  const products = useProducts();
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default ProductList;
    // axios.get(URL).then(
    //     response => {
    //         console.log(response.data);
    //     }
    // ).catch (err => {
    //     console.log(err);
    // })
