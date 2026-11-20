import Link from 'next/link'
import React from 'react'


function Nav() {
  return (
    <div className= "w-full p-4 flex items-center justify-between bg-white shadow-md opacity-50 fixed top-0 left-0 z-50">
        <div className= "text-3xl font-bold opacity-100"> ScrollConnect </div>

             <div className= "flex gap-6 items-center text-2xl font-semibold">
              <button className="p-2 bg-black text-white rounded-lg w-fit text-2xl font-semibold hover:bg-gray-800 transition-colors">
                <Link href="/about">About</Link>
              </button>
               <h2>Contact</h2>
               <h2>FaQ</h2>
             </div>
    </div>         
  )
}

export default Nav