
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ProductCategory = () => {

  return (
    <div className="mx-auto py-5 px-4 w-full  ">
      <div className="grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-5 lg:grid-flow-col gap-5">

        {/* :TITLE */}
        <h2 className="sr-only">Categories preview</h2>

        

        {/* :CATEGORY 1 -> LARGEST, LEFT */}
        <div className="order-1 lg:row-span-2 col-span-2 relative shadow rounded-md overflow-hidden bg-pink-100 filter hover:shadow-lg hover:brightness-125">
          <Link href={`/products/category/women`} className="pt-8 pb-20 px-5 block w-full h-full">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <Image priority src="/model-woman2-ee6e3c8ec2648417a86c813d9acd0ac3.jpg" width={500} height={100} alt="women Fashion" className="absolute inset-0 w-full h-full object-cover object-center" />
              {/* :::overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
            </div>
            {/* ::Category Infos */}
            <div className="relative h-full flex flex-col items-start text-white">
              {/* :::name */}
              <h3 className="text-3xl font-playfair tracking-wider leading-relaxed antialiased">
                <span className="block">Women</span>
                <span className="block">Collection</span>
              </h3>
              {/* :::collection */}
              <p className="mt-4 text-base font-medium font-serif">Summer 2024</p>
              {/* :::badge tag */}
              <span className="mt-4 inline-flex justify-center items-center py-1 px-3 border-none rounded bg-white bg-opacity-30 text-xs text-white font-semibold">Popular</span>
            </div>
          </Link>
        </div>



        {/* :CATEGORY 2 -> SMALL, CENTER LEFT */}
        <div className="order-2 lg:row-span-1 col-span-full sm:col-span-1 relative shadow rounded-md overflow-hidden bg-gray-800 filter hover:shadow-lg hover:brightness-125">
          <Link href={`/products/category/mobile`} className="py-5 px-5 block w-full h-full">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <Image src={"/OIP.jpg"} width={500} height={100} alt="" priority className="absolute inset-0 w-full h-full object-cover object-center" />
              {/* :::overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
            </div>
            {/* ::Category Infos */}
            <div className="pt-10 relative h-full flex flex-col justify-end items-start text-white">
              {/* :::description */}
              <p className="text-sm font-light">To have that <br /> "je ne sais quoi"</p>
              {/* :::name */}
              <h3 className="text-2xl font-playfair tracking-wide leading-relaxed antialiased">Mobile & Accessories</h3>
            </div>
          </Link>
        </div>



        {/* :CATEGORY 3 -> LARGE, CENTER BOTTOM*/}
        <div className="order-4 lg:order-3 lg:row-span-1 col-span-full sm:col-span-1 lg:col-span-2 relative shadow rounded-md overflow-hidden bg-pink-400 filter hover:shadow-lg hover:brightness-125">
          <a href="#link" className="py-5 px-5 block w-full h-full">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <Image src="/model-woman3-50be74f3cd7349e4ff9686622ab7af6d.jpg" width={500} height={100} alt="Women" className="absolute top-0 right-0 w-full lg:w-auto h-full object-cover lg:object-contain object-center" />
              {/* :::overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 lg:via-pink-300" />
            </div>
            {/* ::Category Infos */}
            <div className="relative h-full flex flex-col justify-between items-start text-white">
              {/* :::badge tag */}
              <span className="inline-flex justify-center items-center py-1 px-3 border-none rounded bg-white bg-opacity-30 text-xs text-white font-semibold">Trendy</span>
              {/* :::name */}
              <h3 className="mt-16 text-2xl font-playfair tracking-wide leading-relaxed antialiased">Denim Jacket</h3>
            </div>
          </a>
        </div>



        {/* :CATEGORY 4 -> SMALL, CENTER RIGHT */}
        <div className="order-3 lg:order-4 lg:row-span-1 col-span-full sm:col-span-1 relative shadow rounded-md overflow-hidden bg-gray-500 filter hover:shadow-lg hover:brightness-125">
          <Link href={`/products/category/laptop`} className="py-5 px-5 block w-full h-full">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <Image src="/Laptop.jpg" priority  width={500} height={100} alt="women" className="absolute inset-0 w-full h-full object-cover object-center" />
              {/* :::overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-transparent opacity-70" />
            </div>
            {/* ::Category Infos */}
            <div className="relative h-full flex flex-col justify-between items-start space-y-16 text-white">
              {/* :::badge tag */}
              <span className="inline-flex justify-center items-center py-1 px-3 border-none rounded bg-white bg-opacity-30 text-xs text-white font-semibold">New</span>
              {/* :::name */}
              <h3 className="text-2xl font-playfair tracking-wide leading-relaxed antialiased">Laptops</h3>
            </div>
          </Link>
        </div>
        
        
        
        {/* :CATEGORY 5 -> TALL, RIGHT */}
        <div className="order-5 lg:row-span-2 col-span-full sm:col-span-1 relative shadow rounded-md overflow-hidden bg-blue-800 filter hover:shadow-lg hover:brightness-125">
          <Link href={`/products/category/men`} className="py-5 px-5 block w-full h-full">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <Image priority src="/model-man2-81cb793bea6706ced7de0972a24bfa99.jpg" width={900} height={900} alt="men fashion" className="absolute inset-0 w-full h-full object-cover object-center" />
              {/* :::overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 opacity-50" />
            </div>
            {/* ::Category Infos */}
            <div className="relative h-full flex flex-col justify-between items-start space-y-10 text-white">
              {/* :::badge tag */}
              <span className="inline-flex justify-center items-center py-1 px-3 border-none rounded bg-white bg-opacity-30 text-xs text-white font-semibold">Popular</span>
              {/* :::name */}
              <h3 className="text-3xl font-playfair tracking-wider leading-relaxed antialiased">
                <span className="block">Men</span>
                <span className="block">Collection</span>
              </h3>
            </div>
          </Link>
        </div>

        

      </div>
    </div>
  )
}

export default ProductCategory
