import React,{useState} from 'react'
import Image from 'next/image'

function Navbar() {
    const [open,setOpen]= useState(false)
  return (
   <>
   <nav className='text-white flex md:justify-around items-center p-[40px] justify-between'>
    <div>
        <h1 className="text-2xl">SafeChain</h1>
    </div>

    <div>
        <ul className='md:flex gap-[50px] text-sm hidden'>
            <li>Login</li>
            <li>About</li>
            <li>FAQs</li>
        </ul>
    </div>
    <div>
    </div>

    <div
          onClick={() => setOpen(!open)}
          className={`z-[500px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width={20} height={20}></Image>
        </div>

        <div
          className={`md:hidden text-white absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-[#141414] top-0 duration-300 ${
        open ? "left-0 block" : "right-0 hidden"
      }`}
        >
           
        </div>
   </nav>
   </>
  )
}

export default Navbar