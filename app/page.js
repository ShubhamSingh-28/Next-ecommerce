"use client"

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const {data: session}=useSession()
  console.log(session?.user);
  if (!session?.user) redirect("/login")
  return (
    <div onClick={()=>signOut()}>
      logout
    </div>
  );
}
