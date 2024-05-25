"use client";
import React, { useEffect, useState } from 'react';

function MainCarousel() {
  const [data, setData] = useState([]);
 

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

  if (!data.length) {
    return <div>Loading...</div>;
  }

 
  return (
    <div className="py-28 w-3/4 m-auto gap-2">
      
       {
        data?.map( (product, index) =>{
          return(
            <div key={index} className="w-full h-96 relative">
              <img src={product.images} className="w-full h-full object-cover" alt="product" />
            </div>
          )
        })
       }
    
    </div>
  );
}

export default MainCarousel;
