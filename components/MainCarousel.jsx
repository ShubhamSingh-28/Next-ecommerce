"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Image from "next/image";

function MainCarousel() {
 const [data, setData] = useState([]);
 

  const fetchData = async () => {
    try {
      const res = await fetch('api/product/getProducts');
      const data = await res.json();
      
      setData(data.products);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data.length) {
    return (
      <div>
      <div className="flex  flex-col justify-center  py-12 px-4">
  <div className="relative bg-white p-4  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-lg">
    <div className="m-2 max-w-sm animate-pulse">
      <div className="flex items-center justify-center h-48 w-full bg-gray-300 dark:bg-gray-700 sm:w-96">
        <svg className="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" aria-hidden="true"
          fill="currentColor" aria-label="Loading Icon">
          <path
            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
      <div className="h-8 w-48 mb-4 mt-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-2 max-w-[360px] mb-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-6 rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-6 max-w-[330px] rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-7 max-w-[50px] rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div className="flex items-center">
      <svg className="h-16 w-16 mr-1 animate-pulse text-gray-200 dark:text-gray-700" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="User Icon">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" />
      </svg>
      <div className="flex flex-col gap-2 animate-pulse">
        <div className="h-3 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-2 w-46 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  </div>
</div>
</div>
    )
  }
  
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

 
  return (
    <div className=' my-4  lg:w-[95%] w-[85%] m-auto '>
      <div className=' text-end px-5 pt-3'>
      <Button className=" text-xl rounded-xl" variant="destructive">
        <Link href={"products"}>
        view All
        </Link>
      </Button>
      </div>
      <Slider {...settings}>
  
      {data.map((d, index) => (
          <div key={index} className="relative -left-10  lg:-left-9 md:-left-10 sm:-left-5    m-10 flex max-w-sm  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          
            <Image className=" h-[270px] lg:h-[280px]" width={500} height={100} src={d.images?.[0].url} alt="product image" />
         
          <div className="mt-4 px-5 pb-5">
           
              <h5 className="text-xl tracking-tight text-slate-900">{d.name}</h5>
            
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">${d.price}</span>
              </p>
              <div className="flex items-center">
                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{d.stocks}.0</span>
              </div>
            </div>
          </div>
        </div>      
        ))}
</Slider>
</div>
  );
}

export default MainCarousel;
