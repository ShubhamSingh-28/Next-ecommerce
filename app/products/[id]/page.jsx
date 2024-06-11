"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState, useEffect} from 'react'

function ProductDetail({params}) {
    const { data: session } = useSession()
    if (!session?.user) redirect('/login')
const {id} = params
const [data, setData] = useState([]);
const fetchData = async () => {
    try {
      const res = await fetch(`/api/product/${id}`);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleClick= async()=>{
    try {
        const res = await axios.post(`/api/cart/${id}`);
        const data = await res.data
        
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
  }
  if (!data) {
    return(
        <div className="animate-pulse block-item shadow-md max-w-xl mx-auto mt-20">
  <div className="bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 h-6 rounded-t-3xl"></div>
  <div className="py-4 px-6">
    
    <div className="flex items-center space-x-2">
      <div className="h-7 w-7 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full"></div>
      <div className="h-3 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-1/3"></div>
    </div>
    
    <div className="my-6">
      
      <div className="h-5 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-3/4"></div>
      
      <div className="my-4">
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-full"></div>
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-5/6"></div>
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-4/6"></div>
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-5/6"></div>
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-3/6"></div>
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-2/6"></div>
      </div>
    </div>
    <div className="my-4">
      
      <div className="h-11 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-lg w-full"></div>
      
      <div className="h-3 my-4 mx-auto bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-1/2"></div>
    </div>
  </div>
</div>
    )
  }
  //console.log(data);
  return (
    <div>
      <Navbar/>
      <div className=" bg-gray-100 dark:bg-gray-800 py-28">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={data.images?.[0].url} alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"  onClick={()=>handleClick()}>Add to Cart</button>
</div>
                    <Link href={"/"} className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Go to Shopping</button>
                    </Link>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data.name}</h2>
                <div className="mr-4 my-2">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Category: </span>
                        <span className="text-gray-600 dark:text-gray-300">{data.category}</span>
                    </div>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">{data.price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">{data.stocks}</span>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                    <div className="flex items-center mt-2">
                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    <div className="flex items-center mt-2">
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                       {data.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<Footer/>
    </div>
  )
}

export default ProductDetail
