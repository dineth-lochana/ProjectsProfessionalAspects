import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ControlsProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8800/Products');
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8800/Products/${productId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ paddingBottom: '400px', paddingTop: '150px', padding: '50px' }}>
      <h1>Controls Products</h1>
      <div>
        {products
          .filter((product) => product.Category === 'Controls')
          .map((product) => (
            <div
              key={product.ProductID}
              style={{
                border: '2px solid #D5D5D5 ',
                borderRadius: '10px',
                margin: '20px auto',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div className="left">
                {product.Imagepath && (
                  <img src={`http://localhost:8800/${product.Imagepath}`} alt="Product" style={{ width: '300px' }} />
                )}
              </div>

              <div className="right">
                <div style={{ fontSize: '28px' }}>{product.ProductName}</div>
                <br />
                <div style={{ fontSize: '25px' }}>
                  <b>Category:</b> {product.Category}
                </div>
                <div style={{ fontSize: '20px' }}>
                  <b>Description:</b> {product.description}
                </div>
                <br />
                <div style={{ fontSize: '25px' }}>
                  <b>Price:</b> RS.{product.Price}.00
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ControlsProducts;
