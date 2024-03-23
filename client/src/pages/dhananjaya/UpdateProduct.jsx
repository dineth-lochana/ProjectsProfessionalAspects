import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate ,useLocation} from "react-router-dom";

const UpdateProduct = () => {
  const [Product, setProducts] = useState({
    ProductName: "",
    description: "",
    Category: "",
    Imagepath: "",
    Price: "",
    
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();
  const location = useLocation();

  const ProductID = location.pathname.split("/")[2];

  const handleChange = (e) => {
    if (e.target.name === 'Imagepath') {
      
      setProducts((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    } else {
      setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/Products/`+ProductID, Product);
      navigate("/Product");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };
  return (
    <div style={{ paddingBottom:'100px' ,paddingTop:'150px'}}>
    <div className="form">
    <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Update the  Product</h1>
    <input
      type="text"
      placeholder="Product Name"
      name="ProductName"
      onChange={handleChange}
    />
    <textarea
      rows={5}
      type="text"
      placeholder="Product description"
      name="description"
      onChange={handleChange}
    />
    <input
      type="text"
      placeholder="{Product.Price}"
      name="Price"
      onChange={handleChange}
    />
<input type="file" name="Imagepath" onChange={handleChange} accept="image/*" />
       <input
      type="text"
      placeholder="Product Category"
      name="Category"
      onChange={handleChange}
    />
    <button onClick={handleClick}>Update</button>
    {error && "Something went wrong!"}
   
  </div>
  </div>
  );
};

export default UpdateProduct;