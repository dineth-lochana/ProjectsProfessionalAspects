import React from 'react'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom";



const SolarProducts = () => {
  const [Product, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/Products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);
  const handleDelete = async (ProductID) => {
    try {
      await axios.delete(`http://localhost:8800/Products/`+ ProductID);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };
  const commonStyle = {
    color: 'rgb(2, 2, 2)',
    textAlign: 'center',
  };

  return (
    <div > 
  <br/><br/>
  <h1 style={{ textAlign: 'center' }}>Solar Products</h1>
  <div className="container" style={{ maxWidth: '1300px', margin: '0 auto' }}>
    <div className="row">
      {Product.filter((product) => product.Category === 'Solar').map((Product) => (
        <div key={Product.ProductID} className="col-lg-12" style={{ border: '2px solid #D5D5D5', borderRadius: '10px', margin: '20px 0', padding: '20px', backgroundColor: "#ededed" }}>
          <div className="row">
            <div className="col-md-6">
              {Product.Imagepath && <img src={`http://localhost:8800/${Product.Imagepath}`} alt="Product" style={{ width: '60%', marginLeft: '50px' }} />}
            </div>
            <div className="col-md-6">
              <div style={{ fontSize: '28px' }}>{Product.ProductName}</div>
              <br />
              <div style={{ fontSize: '25px' }}>
                <b>Category:</b> {Product.Category}
              </div>
              <div style={{ fontSize: '20px' }}>
                <b>Description:</b> {Product.description}
              </div>
              <br />
              <div style={{ fontSize: '25px' }}>
                <b>Price:</b> RS.{Product.Price}.00
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  
)
  

}

export default SolarProducts;