import React, { useState, useEffect } from 'react';
import { FiltersContainer, FilterItem, FilterLabel, FilterCheckbox, FilterPrice, InputSlide } from '../style';
import categories from '../constantes/Categories';

const Filters = ({ onCategoryChange, onPriceChange, selectedCategories }) => {
  const [selected, setSelected] = useState(selectedCategories || []);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    setSelected(selectedCategories);
  }, [selectedCategories]);

  const handleCategoryChange = (category) => {
    let newSelected;
    if (selected.includes(category)) {
      newSelected = selected.filter(c => c !== category);
    } else {
      newSelected = [...selected, category];
    }
    setSelected(newSelected);
    onCategoryChange(newSelected);
  };

  const handlePriceChange = (e) => {
    const newRange = [Number(e.target.value[0]), Number(e.target.value[1])];
    setPriceRange(newRange);
    onPriceChange(newRange);
  };

  return (
    <FiltersContainer>
      <h3>Filtros</h3>
      <div>
        <h4>Categorias</h4>
        {categories.map((category, index) => (
          <FilterItem key={index}>
            <FilterCheckbox
              type="checkbox"
              checked={selected.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <FilterLabel>{category}</FilterLabel>
          </FilterItem>
        ))}
      </div>
      <FilterPrice>
        <h4>Faixa de Preço</h4>
        <InputSlide
          type="range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={(e) => handlePriceChange(e)}
          step="10"
        />
        <span>{priceRange[0]} - {priceRange[1]}</span>
      </FilterPrice>
    </FiltersContainer>
  );
};

export default Filters;
