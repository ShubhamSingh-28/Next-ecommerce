"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

import Footer from "@/components/Footer";
import Cartpage from "@/components/Cartpage";

function Cart() { 
  const { data: session } = useSession();
  const [data, setData] = useState([]);

  const [shouldRefetch, setShouldRefetch] = useState(false);

  if (!session?.user) redirect("/login")

    const handleClick = async({id})=>{
      try {
        const res = await axios.delete(`/api/cart/${id}`);
        const data = await res.data
        setShouldRefetch(true)
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    }

    const handleMinus = async({id})=>{
      try {
        const res = await axios.put(`/api/cart/${id}`);
        const data = await res.data
        setShouldRefetch(true)
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    const handleAdd = async({id})=>{
      try {
        const res = await axios.post(`/api/cart/${id}`);
        const data = await res.data
        setShouldRefetch(true)
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    }
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prod = await fetch('/api/cart');
        const data2 = await prod.json();
        console.log(data2);
        setData(data2.viewCart);
        
      } catch (error) {
        console.error(error);
        
      }
    };
    fetchProducts();
    setShouldRefetch(false)
  }, [shouldRefetch]);

 
  console.log(data);
  
 


  return (
    <div>
        <Navbar/>
        <Cartpage data={[data]}/>

<Footer/>
    </div>
  )
}

export default Cart
