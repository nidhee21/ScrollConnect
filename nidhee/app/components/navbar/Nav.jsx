import Link from 'next/link'
import React from 'react'


function Nav() {
  return (
    <div className= "w-full p-4 flex items-center justify-between bg-white shadow-md">
        <div className= "text-2xl font-bold"> Scroll Connect </div>

             <div className= "flex gap-6 items-center"> 
               <Link href="/about">About</Link>
               <h2>Contact</h2>
               <h2>FaQ</h2>
             </div>
    </div>         
  )
}

export default Nav