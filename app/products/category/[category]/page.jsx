"use client"
import Navbar from '@/components/Navbar';
import React, { useState, useEffect} from 'react'

export default function page({params}) {
    const {category} = params
const [data, setData] = useState([]);
const fetchData = async () => {
    try {
      const res = await fetch(`/api/product/category/${category}`);
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>page</div>
  )
}