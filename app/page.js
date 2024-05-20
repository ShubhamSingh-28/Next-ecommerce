"use client"

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const {data: session}=useSession()
  if (!session?.user) redirect("/login")
  return (
<div>
  <div>{session.user.name}</div>
  <Image src={session?.user?.image} width={100} height={100} alt="user" />
    <div onClick={()=>signOut()}>
      logout
    </div>
</div>
  );
}
