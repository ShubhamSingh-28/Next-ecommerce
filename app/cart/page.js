"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import {  Minus, Plus, Trash, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Footer";

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
       // console.log(data2);
        setData(data2.viewCart);
        
      } catch (error) {
        console.error(error);
        
      }
    };
    fetchProducts();
    setShouldRefetch(false)
  }, [shouldRefetch]);

 
  console.log(data);
  
  const Subtotal = data.reduce((total, purchase) => total + purchase.totalPrice, 0);

 


  return (
    <div>
        <Navbar/>
       
  {/*
<section className=' py-28'>
  <div className="mx-auto shadow-lg max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-full">
      <header className="text-center">
        <h1 className="text-xl font-bold  sm:text-3xl">Your Cart</h1>
      </header>

      <div className="mt-8">
        <ul className="space-y-4">
          {data.map((p,index)=>
          <div key={index} className="flex items-center gap-2">
          <img
            src={p?.product?.images?.[0].url}
            alt=""
            className="size-16 rounded object-cover"
          />

          <div>
            <h3 className=" text-sm ">{p?.product?.name}</h3>
            <h3 className=" text-sm ">₹{p.totalPrice}</h3>
            <h3 className=" text-sm ">{p?.product?.category}</h3>
          </div>

          <div className="flex flex-1 items-center justify-end gap-1">
            <div className=" flex justify-evenly items-center gap-0">
            
          <Button disabled={p.quantity===1}  className=" rounded-full" variant={"ghost"}>
          <Minus onClick={()=>handleMinus({id:p?.product?._id})}/>
          </Button>
              <div className="h-8 w-12 rounded border-gray-200 bg-gray-50  text-center text-lg text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              >{p.quantity}</div>
          <Button onClick={()=>handleAdd({id:p?.product?._id})} className=" rounded-full" variant={"ghost"}>
              <Plus/>
              </Button>
              </div>
              <Link href={"/"}>
              <button onClick={()=>handleClick({id:p?.product?._id})} className=" transition hover:text-red-600">
              <Trash2/>
            </button>
              </Link>
            
          </div>
        </div>
          )}
          

         
        </ul>

        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm ">

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>₹{Subtotal}</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>
            </div>

            <div className="flex justify-between">
              
            <Button className=" rounded-xl" variant={"outline"}  >
    <Link className=' text-lg font-semibold ' href={'/products'}>Go to Shopping</Link>
  </Button>
                
            <Button className=" bg-blue-500 hover:bg-blue-700 rounded-xl"   >
    <Link className=' text-lg font-semibold ' href={'/login'}>Checkout</Link>
  </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
*/}
<Footer/>
    </div>
  )
}

export default Cart
