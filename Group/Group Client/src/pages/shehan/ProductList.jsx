import React from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Product 1', price: 20, imgSrc: 'images/co2.jpg' },
  { id: 2, name: 'Product 2', price: 30, imgSrc: 'images/foam.jpg' },
  { id: 3, name: 'Product 3', price: 40, imgSrc: 'images/P50foam.jpg' },
];

const ProductList = () => {
  return (
    <div>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img className="img1" src={product.imgSrc} alt={product.name} />
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
