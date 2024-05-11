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
  const handlePrint = async () => {
    const navbar = document.querySelector(".nisansa_nav");
    const footer = document.querySelector(".footer");
    const buttons = document.querySelectorAll(".view,.add,.update,.delete");

    navbar.style.display = "none";
    footer.style.display = "none";
    buttons.forEach(button => button.style.display = "none");

    window.print();

    navbar.style.display = "block";
    footer.style.display = "block";
    buttons.forEach(button => button.style.display = "flex");
};
  
  const commonStyle = {
    color: 'rgb(2, 2, 2)',
    textAlign: 'center',
  };

  return (
    <div id="printportfolio">
    <div style={{ paddingBottom: '400px', paddingTop: '150px', padding: '50px' }}>
    <h1>Products</h1>
    <button className="add " onClick={handlePrint} >Print Portfolio</button>
    <div className="container" style={{ maxWidth: '1300px', margin: '0 auto' }}>
    <div className="row">
      {Product.map((Product) => (
        <div key={Product.ProductID} className="col-lg-12" style={{ border: '2px solid #D5D5D5', borderRadius: '10px', margin: '20px 0', padding: '20px', backgroundColor: "#ededed" }}>
        <div className="row">
        <div className="col-md-6">
              {Product.Imagepath && <img src={`http://localhost:8800/${Product.Imagepath}`} alt="Product" style={{ width: '60%', marginLeft: '50px' }} />}
            </div>
  
          <div className="col-md-6">
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
          </div>
       
      ))}
    </div>
  </div>
</div>
</div>
  
)
  

}

export default Product;