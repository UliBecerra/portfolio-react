import React from 'react'
import {BsFillPersonFill, BsFillTelephoneFill} from 'react-icons/bs'
import {FaLinkedinIn, FaYoutube, FaFacebookF, FaGithub, FaTelegram} from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import {MdWork, MdOutlinePersonOutline} from 'react-icons/md'

function NavBar({showNav, setShowNav}) {

  const handleX = () => {
    setShowNav((show) => !show)
  }
  return (
    <div className={ `fixed h-screen w-full border-2 border-green-600 bg-[#ffffff]/50 grid place-content-center`}>
      
       <div> 
       <i className='absolute top-[30%] right-20 text-[40px] p-1 cursor-pointer ' onClick={handleX}>X</i>
        <ul className='text-black font-semibold'>
          <li className= "flex items-center gap-3"> <AiOutlineHome/> Home</li>
          <li className= "flex items-center gap-3"> <MdOutlinePersonOutline/>   About me</li>
          <li className= "flex items-center gap-3"><MdWork/> Work</li>
          <li className= "flex items-center gap-3"> <BsFillTelephoneFill/> Contact</li>
        </ul>
      </div>
      <div className='flex gap-3'>
        <a href="https://www.linkedin.com/in/aldo-ulises-becerra-casanova-03b99926b/">
        <ul className="w-[40px] h-[40px] text-[25px] bg-[#0077B5] rounded-full grid place-content-center text-white"><FaLinkedinIn className=''/></ul>
        </a>
        <a href="">
        <ul className="w-[40px] h-[40px] text-[32px] bg-[#ffffff] rounded-full grid place-content-center text-black"><FaGithub className=''/></ul>
        </a>
        <a href="https://www.linkedin.com/in/aldo-ulises-becerra-casanova-03b99926b/">
        <ul className="w-[40px] h-[40px] text-[25px] bg-[#3B5998] rounded-full grid place-content-center text-white"><FaFacebookF className=''/></ul>
        </a>
        <a href="https://www.linkedin.com/in/aldo-ulises-becerra-casanova-03b99926b/">
        <ul className="w-[40px] h-[40px] text-[25px] bg-[#FF0000] rounded-full grid place-content-center text-white"><FaYoutube className=''/></ul>
        </a>
        <a href="https://www.linkedin.com/in/aldo-ulises-becerra-casanova-03b99926b/">
        <ul className="w-[40px] h-[40px] text-[40px] bg-[#ffffff] rounded-full grid place-content-center text-[#0088cc]"><FaTelegram className=''/></ul>
        </a>
        
        
      </div>
    </div>
  )
}

export default NavBar
