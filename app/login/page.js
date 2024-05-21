"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from "next/navigation"

function Login() {
  
  const { data: session } = useSession()
  if (session?.user) redirect('/')
  
  return (
    <div className=" text-center h-screen flex items-center justify-center bg-[#96B6C5]   ">

    <div className="border rounded-md  shadow-lg w-full max-w-sm mx-1 bg-white p-6 border-violet-600 dark:bg-gray-900" id="login-model">
   
  <p className="text-2xl font-bold dark:text-white">Login to Continue</p>
  <p className="dark:text-gray-200">It will take less than 2 minutes</p>

  <div className="mt-4">
          <button onClick={()=>signIn("google")} className="w-full text-center shadow-md py-2 my-3 border flex items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5 mr-2" alt="Google Icon"/>
              <span className="dark:text-gray-300">Login with Google</span>
          </button>

      
          <button onClick={()=>signIn("github")} className="w-full text-center shadow-md py-2 my-3 border flex items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2 dark:text-white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="dark:text-gray-300">Login with Github</span>
          </button>
      
  </div>
  
</div>
    </div>
  )
}

export default Login