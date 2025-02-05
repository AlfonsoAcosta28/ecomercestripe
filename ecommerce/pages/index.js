import React, { useState } from 'react';

import { Product, FooterBanner, HeroBanner, Category, AboutUs } from '@/components';
import { client } from '../lib/client';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';

const Home = ({ products, bannerData }) => {
  const categories = ['chocolate', 'gomitas', 'cereal', 'caramelos'];
  const itemsPerPage = 3; // Número de categorías por página
  const [currentPage, setCurrentPage] = useState(0); // Página actual

  // Calcular los índices de las categorías visibles
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCategories = categories.slice(startIndex, endIndex);

  // Función para ir a la siguiente página
  const handleNext = () => {
    if (endIndex < categories.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Función para ir a la página anterior
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="heading">
        <h2>Productos</h2>
        <p>Gran variedad de dulces</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <div className="heading">
        <h2>Categorías</h2>

      </div>

      <div>
        <div className="category-options">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`${currentPage === 0 ? 'text-gray-400' : 'text-blue-500'
              } text-lg`}
          >
            <GrPrevious />
          </button>
          <button
            onClick={handleNext}
            disabled={endIndex >= categories.length}
            className={`${endIndex >= categories.length ? 'text-gray-400' : 'text-blue-500'
              } text-lg`}
          >
            <GrNext />
          </button>
        </div>

        <Category visibleCategories={visibleCategories} />


      </div>

      {/* <FooterBanner footBanner={bannerData && bannerData[0]} /> */}

      <AboutUs />
    </>
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

export default Home;
