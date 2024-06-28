import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ContainerPrincipal, ContainerProductItens } from "../style";
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';
import loadedProducts from '../constantes/LoadedProducts';

const Produtos = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const location = useLocation();

  useEffect(() => {
    setProducts(loadedProducts);
    setFilteredProducts(loadedProducts);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');

    if (category) {
      setSelectedCategories([category]);
    }
  }, [location]);

  useEffect(() => {
    let newFilteredProducts = products;

    if (selectedCategories.length > 0) {
      newFilteredProducts = newFilteredProducts.filter(product =>           
        selectedCategories.includes(product.category)
      );
    }

    newFilteredProducts = newFilteredProducts.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(newFilteredProducts);
  }, [selectedCategories, products, priceRange]);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  return (
    <ContainerPrincipal>
      <Filters onCategoryChange={handleCategoryChange} onPriceChange={handlePriceChange} selectedCategories={selectedCategories}/>
      <ContainerProductItens>
        <ProductList products={filteredProducts} />
      </ContainerProductItens>
    </ContainerPrincipal>
  );
};

export default Produtos;
