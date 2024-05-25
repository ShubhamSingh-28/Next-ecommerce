"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Navbar from "@/components/Navbar";


function page() {
  const { data: session } = useSession()
  if (!session?.user) redirect('/login')
  return (
    <div>page</div>
  )
}

export default page