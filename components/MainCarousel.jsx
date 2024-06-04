"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

function MainCarousel() {
 const [data, setData] = useState([]);
 

  const fetchData = async () => {
    try {
      const res = await fetch('api/product/getProducts');
      const data = await res.json();
      console.log(data);
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
    <div className='my-5 bg-yellow-200 gap-4 shadow-xl lg:w-[97%] w-[88%] m-auto '>
      <div className=' text-end px-6 pt-4'>
      <Button className=" text-lg rounded-xl" variant="destructive">
        <Link href={"products"}>
        view All
        </Link>
      </Button>
      </div>
      <Slider {...settings}>
  
      {data.map((d, index) => (
          
         <div  key={index} className=" px-10 h-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">      
              <img  src={d.images?.[0].url } alt="" className="h-80 w-72 object-cover rounded-t-xl"/>
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">{d.brands}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{d.name} </p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">${d.price}</p>
                </div>
            </div>         
         </div>        
        ))}
</Slider>
</div>
  );
}

export default MainCarousel;
