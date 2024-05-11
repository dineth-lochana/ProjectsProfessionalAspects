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
    <div > 
  <br/><br/>
  <h1 style={{ textAlign: 'center' }}>Controls</h1>
  <div className="container" style={{ maxWidth: '1300px', margin: '0 auto' }}>
    <div className="row">
    {products
          .filter((product) => product.Category === 'Controls')
          .map((product) => (
        <div key={product.ProductID} className="col-lg-12" style={{ border: '2px solid #D5D5D5', borderRadius: '10px', margin: '20px 0', padding: '20px', backgroundColor: "#ededed" }}>
          <div className="row">
            <div className="col-md-6">
              {product.Imagepath && <img src={`http://localhost:8800/${product.Imagepath}`} alt="Product" style={{ width: '60%', marginLeft: '50px' }} />}
            </div>
            <div className="col-md-6">
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
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default ControlsProducts;
