import { useState } from "react"
import { Link } from "react-scroll"

export default function Header() {
  const [showNavHead, setShowNavHead] = useState(false)
  return (
    <>
    <div className=' right-0 text-white fixed z-50 md:hidden'>
      <button onClick={() => setShowNavHead(showNavHead => !showNavHead)}><i className='bx bx-menu-alt-right text-3xl p-2 md:hidden hover:text-red-500'></i></button>
    </div>
    
    
      <ul className={`${showNavHead ? 'fixed visible z-40 bg-[#0F103F] flex flex-col gap-10 text-center h-screen  bottom-0 top-0' : 'hidden md:inline-block'}     fixed w-full   text-lg  justify-center p-8 md:z-20 md:gap-28 font-medium md:flex md:static`}>
       <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowNavHead(false)} className="cursor-pointer" ><li className="p-2">Home</li> </Link>
       <Link to="aboutme" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowNavHead(false)} className="cursor-pointer"><li className="p-2">About me</li> </Link>
       <Link to="work" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowNavHead(false)} className="cursor-pointer"><li className="p-2">Work</li> </Link>
       <Link to="Contact" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowNavHead(false)} className="cursor-pointer"><li className="p-2">Contact</li> </Link>
      </ul>
   
    </>
  )
}
