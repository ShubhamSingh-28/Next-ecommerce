"use client";

import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from './ProductCard';

function MyProducts() {
    const [myProducts, setMyProducts] = useState([])
    const [page, setPage] = useState(1);
    useEffect(()=>{
        const myProducts = async()=>{
          try {
            const res = await fetch('/api/product/bySeller');
          const data = await res.json();
          setMyProducts(data.products)
          } catch (error) {
            console.log(error);
          }
        }
        myProducts()
      },[])  
  return (
    <div>
        <div className="my-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-x-10 lg:mx-28 mx-10 gap-y-9">
            { myProducts.slice(page * 12 -12, page*12).map((product, index) => (
            <ProductCard key={index} items={[product]} />
          ))  }
        </div>

        <div className="flex justify-center mt-12 gap-5">
        {page <= 1 ? (
  <div  className="inline-flex items-center cursor-pointer border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
    <ArrowLeft />
    <span className="ml-1 font-bold text-lg">Back</span>
  </div>
):(<div  onClick={() => setPage(page - 1)} className="inline-flex items-center cursor-pointer border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
    <ArrowLeft />
    <span className="ml-1 font-bold text-lg">Back</span>
  </div>)}

          <div onClick={()=>setPage(page + 1)}  className="inline-flex cursor-pointer items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
            <span className="mr-1 font-bold text-lg">Next</span>
            <ArrowRight/>
          </div>
        </div>
    </div>
  )
}

export default MyProducts