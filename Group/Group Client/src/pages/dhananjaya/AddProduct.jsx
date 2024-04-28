import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const AddProduct = () => {
  const [Product, setProducts] = useState({
    ProductName: "",
    description: "",
    Category: "",
    Imagepath: null,
    Price: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'Imagepath') {
      setProducts((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    } else {
      setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Check if any input is empty
    if (!Product.ProductName || !Product.description || !Product.Category || !Product.Price || !Product.Imagepath) {
      setError(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('ProductName', Product.ProductName);
      formData.append('description', Product.description);
      formData.append('Category', Product.Category);
      formData.append('Price', Product.Price);
      formData.append('Imagepath', Product.Imagepath);

      await axios.post("http://localhost:8800/products", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      swal("Success!", "Add product successful!", "success")
      navigate("/Product");
    } catch (err) {
      console.log(err);
      swal("Failed!", "Process failed. Please try again.", "error");
      setError(true);
    }
  };

  return (
    <div style={{ paddingBottom: '100px', paddingTop: '150px' }}>
      <div className="form" >
        <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Add New Product</h1>
        <input
          type="text"
          placeholder="Product Name"
          name="ProductName"
          onChange={handleChange}
          required
        />
        <textarea
          rows={5}
          type="text"
          placeholder="Product description"
          name="description"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Product price"
          name="Price"
          onChange={handleChange}
          required
        />
        <input type="file" name="Imagepath" onChange={handleChange} accept="image/*" required />
        <select name="Category" onChange={handleChange} style={{ textAlign: "center", fontSize: "20px", borderRadius: "25px" }} required>
          <option value="">Select Category</option>
          <option value="Solar">Solar</option>
          <option value="Fire Detection and Protection">Fire Detection and Protection</option>
          <option value="Controls">Controls</option>
        </select>
        <button onClick={handleClick}>Add</button>
        {error && <p style={{ color: "red" }}>All fields are required!</p>}
      </div>
    </div>
  )
}

export default AddProduct;
