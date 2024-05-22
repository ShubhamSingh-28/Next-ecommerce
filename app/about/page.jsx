"use client";
import axios from 'axios';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react'

function About() {
  const {data :session } = useSession()
  const [data, setData] = useState({ name: "",owner:session?.user._id });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");

    try {
      const res = await axios.post("/api/product", data);
      setSuccessMessage("Product added successfully!");
      setData({ name: "" }); // Clear the form
    } catch (error) {
      setError("Error submitting the form");
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
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}

export default About;
