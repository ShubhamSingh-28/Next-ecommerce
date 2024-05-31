"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function page() {
  const { data: session } = useSession()
  if (!session?.user) redirect('/login')
    const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setData(data.products);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (

    <div>
      <Navbar />
      <div className=" py-24">
      <h2 className="px-20 py-6 text-3xl font-bold">All Products</h2>
        <div className="my-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-x-3 lg:mx-28 mx-10 gap-y-6">
            { data.slice(page * 12 -12, page*12).map((product, index) => (
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
    </div>
  )
}

export default page