import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <section >
    <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
            <p className="lg:text-xl text-xl  md:font-semibold text-blue-500 ">404 error</p>
            <h1 className="mt-3 text-xl font-semibold  lg:text-3xl">Page not found</h1>
            <p className="mt-4 text-sm ">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

            <div className="flex items-center mt-6 gap-x-3">
                <Link href={'/'}  className="flex items-center md:text-xl text-sm justify-center w-1/2 px-4 py-3 bg-blue-500  transition-colors duration-200 border rounded-2xl gap-x-2 sm:w-auto dark:hover:bg-blue-900  hover:bg-blue-900 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span >Go back home</span>
                </Link>
            </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <Image priority className="w-full max-w-lg lg:mx-auto" width={100} height={100} src="/illustration.svg" alt="xg"/>
        </div>
    </div>
</section>
  )
}

export default NotFound