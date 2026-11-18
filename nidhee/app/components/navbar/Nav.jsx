import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className= "w-full flex flex gap-7 items-center justify-center">
        <div> Logo </div>
             <div className= "flex gap-5  ">
               <Link href="/about">About</Link>
               <h2>Contact</h2>
               <h2>FaQ</h2>
             </div>
    </div>         
  )
}

export default Nav