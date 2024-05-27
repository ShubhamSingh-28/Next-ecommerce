"use client";
import axios from 'axios';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react'

function Admin() {
  const {data :session } = useSession()
  const [data, setData] = useState({ name: "",image:[]});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(data);
      const res = await axios.post("/api/cart", data);
      setData({ name: "" }); // Clear the form
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={data.name} 
          onChange={handleChange} 
          placeholder="Product Name" 
        />
        <input type="file" name="image" value={data.image} onChange={handleChange} id="" />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default Admin;
