"use client"

import {SessionProvider} from  "next-auth/react"

function Session({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>

  )
}

export default Session