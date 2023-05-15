import React from 'react'
import { HiBars3BottomRight } from "react-icons/hi2";

function Header({setShowNav, showNav}) {
  {/* <div className='flex justify-center'>
        <ul>
          <li className='inline px-3'>
            Home
          </li>
          <li className='inline px-3'>
            About me
          </li>
          <li className='inline px-3'>
            Work
          </li>
          <li className='inline px-3'>
            Contact
          </li>
        </ul>
  </div> */}
  const handleClickshowNav = () => {
    setShowNav((show) => !show)
  } 
  return (
    <section className={`${showNav ? 'hidden' : 'visible'}  `}>
    <div className='flex justify-end'>
    <button className='z-10 fixed text-white text-3xl m-3 ' onClick={handleClickshowNav}> <HiBars3BottomRight /> </button>
  </div>
    <div className=' bg-[url(public/images/planethead.png)] md:left-0 bg-center
     w-[322px] h-[469px] absolute top-[-83px] left-[-222px] '>
      
    </div>
    </section>

  
  )
}

export default Header
