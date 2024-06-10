"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState, useEffect} from 'react'
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from '@/components/ProductCard';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Category({params}) {
  const { data: session } = useSession()
  if (!session?.user) redirect('/login')
    const {category} = params
const [data, setData] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(true);
const fetchData = async () => {
    try {
      const res = await fetch(`/api/product/category/${category}`);
      const data2 = await res.json();
      setData(data2.categoryProduct);
      setLoading(false)
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return(
<div className="flex items-center justify-center w-full h-[100vh] text-gray-900 dark:text-gray-100 dark:bg-gray-950">
  <div>
    <h1 className="text-xl md:text-7xl font-bold flex items-center">L<svg stroke="currentColor" fill="currentColor" strokeWidth="0"
        viewBox="0 0 24 24" className="animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z">
        </path>
      </svg> ading . . .</h1>
  </div>
</div>
    )
  }

  return (
    <div>
    <Navbar />
    
    <div className=" py-24">
    <h2 className=" px-16 py-6 text-3xl font-bold">Category : {category}</h2>
    {!data.length ? <h1 className='px-16 py-6 text-3xl font-bold'>This Category has no Product Right Now !</h1> : 
    ( <div> <div className="my-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-x-10 lg:mx-28 mx-10 gap-y-9">
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
)
    }
     
      </div>
      <Footer/>
  </div>
  )
}
