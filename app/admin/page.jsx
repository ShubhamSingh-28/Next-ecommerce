"use client";
import axios from 'axios';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

function Admin() {
  const { data: session } = useSession();
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [brands, setBrands] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stocks, setStocks] = useState("");

  const handleFileChange = (e) => {
    setImages(e.target.files); // Store the FileList object directly
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]); // Append each file to the FormData object
    }
    formData.set("name", name);
    formData.set("brands", brands);
    formData.set("category", category);
    formData.set("description", description);
    formData.set("price", price);
    formData.set("stocks", stocks);

    try {
      const res = await axios.post('/api/product', formData);
      console.log(res.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="images"
          accept="image/*"
          onChange={handleFileChange}
          multiple
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          name="brands"
          value={brands}
          onChange={(e) => setBrands(e.target.value)}
          placeholder="Brands"
        />
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          name="stocks"
          value={stocks}
          onChange={(e) => setStocks((e.target.value))}
          placeholder="Stocks"
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice((e.target.value))}
          placeholder="Price"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Admin;
