import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateProduct = () => {
  const [product, setProduct] = useState({
    ProductName: "",
    description: "",
    Category: "",
    Imagepath: null,
    Price: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const productId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/Products/${productId}`);
        const productData = res.data;
        setProduct(productData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'Imagepath') {
      setProduct((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("ProductName", product.ProductName);
      formData.append("description", product.description);
      formData.append("Category", product.Category);
      formData.append("Price", product.Price);
      formData.append("Imagepath", product.Imagepath);

      await axios.put(`http://localhost:8800/Products/${productId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate("/Product");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div style={{ paddingBottom: '100px', paddingTop: '150px' }}>
      <div className="form">
        <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Update Product</h1>
        <input
          type="text"
          placeholder="Product Name"
          name="ProductName"
          value={product.ProductName}
          onChange={handleChange}
          required
        />
        <textarea
          rows={5}
          placeholder="Product description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Product price"
          name="Price"
          value={product.Price}
          onChange={handleChange}
          required
        />
        <input type="file" name="Imagepath" onChange={handleChange} accept="image/*" required />
        <select name="Category" value={product.Category} onChange={handleChange} style={{ textAlign: "center", fontSize: "20px", borderRadius: "25px" }} required>
          <option value="">Select Category</option>
          <option value="Solar">Solar</option>
          <option value="Fire Detection and Protection">Fire Detection and Protection</option>
          <option value="Controls">Controls</option>
        </select>
        <button onClick={handleClick}>Update</button>
        {error && <p style={{ color: "red" }}>All fields are required!</p>}
      </div>
    </div>
  );
};

export default UpdateProduct;
