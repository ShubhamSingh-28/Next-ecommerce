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

 /* if (!data.length) {
    return <div>Loading...</div>;
  }
  */
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
    <div className='my-5  gap-0 shadow-xl lg:w-[97%] w-[88%] m-auto '>
      <div className=' text-end px-6 pt-4'>
      <Button className=" text-xl rounded-xl" variant="destructive">
        <Link href={"products"}>
        view All
        </Link>
      </Button>
      </div>
      <Slider {...settings}>
  
      {data.map((d, index) => (
          <div key={index} className="relative -left-4 m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          
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
