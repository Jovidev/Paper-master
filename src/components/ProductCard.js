// src/components/ProductCard.js
import React from 'react';
import { useAuth } from '../contexts/AuthController';
import { useCart } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { isLoggedIn } = useAuth();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert('Por favor, realize o login para adicionar itens ao carrinho.');
      return;
    }
    addToCart(product);
      alert('Produto adicionado ao carrinho com sucesso!');
  };

  return (
    <div className="card mb-4">
        <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">R$ {product.price}</p>
                <button className="btn btn-primary" onClick={handleAddToCart}>Adicionar ao carrinho</button>
              </div>
      </div>

  );
};

export default Product;
//import React from 'react';

