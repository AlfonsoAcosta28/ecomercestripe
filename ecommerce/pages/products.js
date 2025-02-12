import React, { useState } from 'react';

import '../styles/products.css';
import { Product } from '@/components';
import { client } from '../lib/client';

const categories = ['chocolate', 'gomitas', 'cereal', 'caramelos'];


const Products = ({products}) => {
  const [maxPrice, setMaxPrice] = useState(1500);
  return (
    <div className="products-page">
      <div className="products-filter-container">
        <h2>Filtros</h2>
        <label>Precio máximo: ${maxPrice}</label>
        <input 
          type="range" 
          min={0} 
          max={1500} 
          value={maxPrice} 
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <label>Categorías</label>
        <select>
          <option value="">Todas</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="products-page-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}

      </div>
    </div>
  );
};


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products: products || [], bannerData: bannerData || [] },
  };
};
export default Products;
