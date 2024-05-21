"use client"
import Navbar from '@/components/Navbar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

function Cart() { 
  const {data :session} = useSession()
  if(!session?.user) redirect('/')
  return (
    <div>
        <Navbar/>
        <section className="overflow-hidden relative">

 
<div id="scroll-progress" className="bg-orange-600 h-1 fixed top-0 left-0 z-50"></div>

<div className="w-full mx-auto 2xl:max-w-7xl flex flex-col justify-center py-24  relative p-8">
 <div className="prose text-gray-500 prose-sm  text-center prose-headings:font-normal prose-headings:text-xl mx-auto w-full">
  <div>
   <h1>Scroll progress bar</h1>
   <p className="text-balance">
    Scroll down to see the bar appear.
   </p>
  </div>
 </div>
 <div className="mt-6 border-t pt-12 max-w-xl mx-auto w-full">
  <div className="prose prose-sm 2xl:text-lg text-gray-500">
   <p>Brief Facts About Me</p>
   <p>
    In the throbbing heart of London's vibrant streets, amidst the
    colorful tapestry of the 1980s, I drew my first breaths at St
    Thomas’ Hospital Medical School. An intricate blend of European
    heritage defines my roots - my father's lineage tracing back to the
    rolling hills of Italy, while my mother embodies the fiery spirit of
    Spain.
   </p>
   <p>
    My upbringing was a harmonious fusion of the majestic landscapes of
    northern Italy and the sun-drenched shores of southern Spain. From
    the quaint cobblestone streets of Borgosesia, Vercelli, Italy, to
    the majestic coastal cliffs of Gorliz, Bilbao, and the tranquil
    beaches of Torrevieja, Alicante, Spain, my formative years were an
    immersive journey through diverse cultures and breathtaking scenery.
   </p>
   <p>
    Passion became my guiding star from a tender age; I found solace and
    expression in the elegant contours of automotive design, sketching
    visions of sleek machines that seemed to dance with the wind.
    Equally at home amidst the crashing waves, I became a lifelong
    devotee of the ocean, finding solace and exhilaration atop a
    surfboard.
   </p>
   <p>
    The melodies of different languages became my symphony; fluent in
    the cadences of Castilian Spanish, the eloquence of English, the
    lyrical beauty of Italian, and the melodious tones of Swedish, I
    effortlessly traversed linguistic boundaries.
   </p>
   <p>
    Summers bathed in the Mediterranean sun found me standing as a
    vigilant sentinel along the Spanish coast, serving as a lifeguard, a
    silent guardian of lives amidst the azure expanse. Driven by the
    thirst for adventure and discovery, I ventured to the lush
    landscapes of Harrogate in my twenties, lured by the mystique of
    British life and culture.
   </p>
   <p>
    Yet, the siren call of my ancestral lands beckoned, and I returned
    to the warm embrace of Spanish sunshine, seeking solace amidst the
    familiar lands I had missed. Relocating to Helsinki with my beloved
    wife in 2011, and now finding sanctuary in the tranquil beauty of
    the Åland Islands, I stand proudly as both a father and a devoted
    husband.
   </p>
   <p>
    Inspired by a simple tweak of my Android phone settings, I embarked
    on a journey into the realm of web development. Launching my
    inaugural project, Colors and Fonts, in 2018, I have since dedicated
    myself to the art of digital creation, constantly refining and
    expanding my digital footprint.
   </p>
   <p>
    Despite encountering challenges, including developing projects on a
    laptop with a failing screen, I persevered, ultimately seeing two
    projects acquired in 2022. Initiating ventures such as Lexington
    Themes and Windstatic, I officially unveiled them to the world in
    February 2023.
   </p>
   <p>
    Simplicity and clarity have always been the guiding principles of my
    design philosophy. Consistency, both in life and work, serves as my
    steadfast companion, guiding my approach to web development, project
    management, and personal growth.
   </p>
   <p>
    Reflecting on my journey from the varied landscapes of Italy and
    Spain to the burgeoning tech scene of the Åland Islands, I have
    embraced the challenges and opportunities that each transition
    brought forth. Fueled by an unwavering passion for design,
    development, and entrepreneurship, I march forward, with consistency
    as the cornerstone of my success. As I continue to explore new
    ventures and embark on creative endeavors, I remain steadfastly
    committed to the principles of simplicity and clarity that define
    both my work and life philosophy.
   </p>
   <p>
    Thank you for taking the time to acquaint yourself with my story. I
    am filled with anticipation for the adventures that lie ahead,
    eagerly anticipating the ongoing evolution of my projects and
    personal endeavors. May your day be filled with beauty and
    inspiration.
   </p>
   <p>Michael Andreuzza</p>
  </div>
 </div> 
 <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center p-2 ">
  <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-xl border">
   <div className="flex w-0 flex-1 items-center p-4">
    <div className="w-full">
     <p className="text-sm font-medium text-neutral-900">Tutorial</p>
     <p className="mt-1 text-sm text-neutral-500">
      How to a create a scroll progress bar with Tailwind CSS and
      Javascript
     </p>
     <p className="mt-2 text-xs text-orange-500 underline"> <a href="https://lexingtonthemes.com">
       by © Lexington Themes</a> </p>
    </div>
   </div>
   <div className="flex">
    <div className="flex flex-col divide-y divide-neutral-200">
     <div className="flex h-0 flex-1"> <a href="https://lexingtonthemes.com/tutorials/how-to-create-a-scroll-progress-bar-with-tailwind-css-and-javascript" type="button" className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500">Tutorial</a> </div>
     <div className="flex h-0 flex-1"> <a href="https://github.com/Lexington-Themes/lexington-tutorials/blob/main/src/pages/scroll-progress-bar/index.astro" className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500">Get the code</a> </div>
    </div>
   </div>
  </div>
 </div> 
</div>
</section>

        Cart
    </div>
  )
}

export default Cart