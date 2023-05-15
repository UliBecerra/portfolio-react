import React from 'react'
import {BsFillPersonFill, BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'
import {MdWork, MdOutlinePersonOutline} from 'react-icons/md'
import { SlSocialLinkedin } from "react-icons/sl";
import {FaLinkedinIn, FaYoutube, FaFacebookF, FaGithub, FaTelegram} from 'react-icons/fa'
function Footer({setShowNav, showNav}) {

  const handleClickHideNav = () =>{
    setShowNav((show) => !show)
  } 
  return (
    <div className="bg-[#1C1C65] h-[450px] md:h-auto text-white font-[400] text-[17px] w-full py-10">
      <div className=' max-w-[900px] m-auto'> 
        <ul className='grid gap-5 text-lg p-20 md:grid-cols-4'>
          <li onClick={handleClickHideNav} ><a  className= "flex items-center gap-3" href="#home"> <AiOutlineHome/> Home</a></li>
          <li onClick={handleClickHideNav} ><a  className= "flex items-center gap-3" href="#about-me"> <MdOutlinePersonOutline/>   About me</a></li>
          <li onClick={handleClickHideNav} ><a  className= "flex items-center gap-3" href="#work"><MdWork/> Work</a></li>
          <li onClick={handleClickHideNav} > <a className= "flex items-center gap-3"  href="#contact"><BsFillTelephoneFill/> Contact</a></li>
        </ul>
      
      <div className=' flex  justify-around mx-12 pb-5 border-b-2 border-white'>
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
    </div>
  )
}

export default Footer
