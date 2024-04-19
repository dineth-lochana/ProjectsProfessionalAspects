import React from 'react'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom";
import swal from 'sweetalert';




const Product = () => {
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
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this product!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then(async (willDelete) => {
        if (willDelete) {
          await axios.delete(`http://localhost:8800/Products/` + ProductID);
          swal("Poof! Your product has been deleted!", {
            icon: "success",
          });
          window.location.reload();
        } else {
          swal("Your product is safe!");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  const commonStyle = {
    color: 'rgb(2, 2, 2)',
    textAlign: 'center',
  };

  return (
    <div style={{ paddingBottom: '400px', paddingTop: '150px', padding: '50px' }}>
    <h1>Products</h1>
    <div>
      {Product.map((Product) => (
        <div key={Product.ProductID} style={{ border: '2px solid #D5D5D5 ',borderRadius: '10px', margin: '20px auto', padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <div className="left">
          {Product.Imagepath && <img src={`http://localhost:8800/${Product.Imagepath}`} alt="Product" style={{ width: '400px' }} />}
          </div>
  
          <div className="right">
            <div style={{ fontSize: '28px' }}>{Product.ProductName}</div>
            <br/>
            <div style={{ fontSize: '25px' }}>
  <b>Category:</b> {Product.Category}
</div>
<div style={{ fontSize: '20px' }}>
  <b>Description:</b> {Product.description}
</div>
<br/>
<div style={{ fontSize: '25px' }}>
  <b>Price:</b> RS.{Product.Price}.00
</div>

            <button className="delete" onClick={() => handleDelete(Product.ProductID)} style={{ width: "150px",fontSize: '20px' }}>Delete</button>
            <button className="update" style={{ width: "150px",fontSize: '20px' }}>
              <Link
                to={`/UpdateProduct/${Product.ProductID}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  
    <button className="addHome" style={{ position: 'fixed', top: '10px', right: '10px', width: "150px" }}>
      <Link to="/AddProduct" style={{ color: "inherit", textDecoration: "none" }}>
        Add new Product
      </Link>
    </button>
  </div>
  
)
  

}

export default Product;