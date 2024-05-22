"use client"
import { signOut, useSession } from 'next-auth/react'
import Image from "next/image";
import { ModeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import Link from 'next/link';
import  { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ShoppingCart } from 'lucide-react';

function Navbar() {
  const {data: session}=useSession()
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.pageYOffset <= 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <section>
      <div
        className={`fixed z-50 shadow-lg w-full lg:px-8 px-5 py-0 transition-all duration-1000 rounded-full mt-4 inset-x-0 mx-auto ease-in-out transform ${
          atTop ? 'max-w-6xl' : '  bg-opacity-90 backdrop-blur-xl lg:max-w-4xl md:max-w-3xl max-w-[90%]'

        }`}
      >
        <div className="flex items-center w-full p-2 ">
        <span className={`font-bold tracking-tighter uppercase lg:text-2xl text-2xl `}>
           Shopsy
            </span>
          <nav className={`flex flex-grow lg:gap-8 gap-3 pb-1 pt-2  justify-end`}>
          <Link className=' hidden md:block '  href={'/cart'}>
    <ShoppingCart className={`absolute top-6 `}/>
    <span className=' relative bottom-2 left-3 bg-red-600 rounded-full px-2 py-1 text-white'>2</span>
    </Link>
    <ModeToggle/>
  {
    session?.user ? (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Image src={session?.user?.image} className=' cursor-pointer rounded-full' width={45} height={45} alt='user'/>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            {session?.user?.name}
          </DropdownMenuItem>
          <DropdownMenuItem>
            {session?.user?.email}
          </DropdownMenuItem>
          <DropdownMenuItem></DropdownMenuItem>
          <DropdownMenuItem>
          <Link className=' md:hidden'  href={'/cart'}>
    <ShoppingCart className=' absolute'/>
    <span className=' relative bottom-3 left-5 bg-red-600 rounded-full px-2 py-1 text-white'>2</span>
    </Link>
          </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
    Sign Out
  </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ):(
      <Button className=" rounded-xl" variant="destructive" >
    <Link className=' text-lg font-semibold ' href={'/login'}>Login</Link>
  </Button>)
  }
          </nav>

      </div>
      </div>
    </section>
    
  )
}


export default Navbar


