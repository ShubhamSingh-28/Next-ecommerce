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
    formData.append("name", name);
    formData.append("brands", brands);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stocks", stocks);
    //console.log(formData.get("stocks"));
    
    try {
      const res = await axios.post('/api/product', formData);
      console.log(res.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  if (!session) {
    return <p>You need to be logged in to access this page.</p>;
  }

  return (
    <div className="bg-white border-4 rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">
          Add product
        </h3>
      </div>

      <div className="p-6 space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
              <input type="text" name="name" id="product-name" onChange={(e) => setName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
              <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Brand</label>
              <input type="text" name="brands" id="brand" onChange={(e) => setBrands(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
              <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="stocks" className="text-sm font-medium text-gray-900 block mb-2">Stock</label>
              <input type="number" name="stocks" onChange={(e) => setStocks(e.target.value)} id="stocks" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="20" required />
            </div>
            <div className="col-span-full">
              <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
              <textarea id="product-details" name='description' onChange={(e) => setDescription(e.target.value)} rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details"></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="images" className="text-sm font-medium text-gray-900 block mb-2">Product Images</label>
              <input type="file" id="images" name="images" onChange={handleFileChange} multiple className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" />
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 rounded-b">
            <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
