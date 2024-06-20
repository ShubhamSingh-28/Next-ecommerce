"use client";
import axios from 'axios';
import React, {  useState } from 'react';
import { useSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import MyProducts from '@/components/MyProducts';

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
   // e.preventDefault();
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
      console.log(res);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  if (!session) {
    return <p>You need to be logged in to access this page.</p>;
  }




  return (
    <div>
      <Navbar/>
      <Dialog>
        <div className=' py-28 flex justify-between items-center lg:px-11 px-3'>
          <h2 className=' lg:text-4xl text-3xl font-semibold lg:relative lg:left-9'>My Products</h2>
        <DialogTrigger asChild>
      <Button variant="outline" className=" text-xl rounded-2xl">Add Product</Button>
      </DialogTrigger>
        </div>
      

      <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="product-name"  className="text-right">
            Product Name
            </Label>
            <Input type="text"
              name="name" id="product-name" onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category"  className="text-right">
            Category
            </Label>
            <Input type="text"
              name="category" id="category" onChange={(e) => setCategory(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand"  className="text-right">
            Brand
            </Label>
            <Input type="text"
              name="brands" id="brand" onChange={(e) => setBrands(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price"  className="text-right">
            Price
            </Label>
            <Input type="number" name="price" onChange={(e) => setPrice(e.target.value)} id="price"
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stocks"  className="text-right">
            Stock
            </Label>
            <Input type="number" name="stocks" onChange={(e) => setStocks(e.target.value)} id="stocks"
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="Image"  className="text-right">Upload images</Label>
    <input id="Image" type="file" name='images' onChange={handleFileChange} multiple className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60 col-span-3" />
             </div>

             <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="product-details" className="text-right">Product Details</Label>
              <textarea id="product-details" name='description' onChange={(e) => setDescription(e.target.value)} rows="6" className="col-span-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details"></textarea>
            </div>

        </div>
        <DialogFooter>
          <Button type="submit">Create Product</Button>
        </DialogFooter>
        </form>

      
      </DialogContent>
      </Dialog>

      <MyProducts/>
    <Footer/>
    </div>
  );
}

export default Admin;


