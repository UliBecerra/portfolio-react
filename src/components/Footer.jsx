import {AiOutlineHome} from 'react-icons/ai'
import { BsFillTelephoneFill} from 'react-icons/bs'

import {MdWork, MdOutlinePersonOutline} from 'react-icons/md'
import {FaLinkedinIn, FaYoutube, FaFacebookF, FaGithub, FaTelegram} from 'react-icons/fa'
import { Link } from 'react-scroll'
function Footer() {

 
  return (
    <div className="bg-[#1C1C65]  h-[450px] md:h-auto text-white font-[400] text-[17px] w-full py-10 z-20">
      <div className=' max-w-[900px] m-auto grid row-start-2 z-20  '> 
       <div className=" row-span-2 ">
{/* 
       <ul className='grid gap-5 text-lg p-20 md:p-10 md:grid-cols-4 md:justify-center text-center'>
          <li className='flex md:justify-center md:items-center' ><Link to="home" spy={true} smooth={true} offset={-100} duration={500}  className= "flex items-center gap-3 z-30 cursor-pointer " > <AiOutlineHome/> Home</Link></li>
          <li className='flex md:justify-center md:items-center' ><Link to="aboutme" spy={true} smooth={true} offset={-100} duration={500}  className= "flex items-center gap-3 z-30 cursor-pointer " > <MdOutlinePersonOutline/>   About me</Link></li>
          <li className='flex md:justify-center md:items-center' ><Link to="work" spy={true} smooth={true} offset={-100} duration={500}  className= "flex items-center gap-3 z-30 cursor-pointer " ><MdWork/> Work</Link></li>
          <li className='flex md:justify-center md:items-center' > <Link to="Contact" spy={true} smooth={true} offset={-100} duration={500}  className= "flex items-center gap-3 z-30 cursor-pointer  " ><BsFillTelephoneFill/> Contact</Link></li>
        </ul> */}

       </div>
      
      <div className=' flex  justify-around md:justify-center md:gap-10 mx-12 pb-5 md:border-none border-b-2 border-white z-20 '>
        <a href="https://www.linkedin.com/in/aldo-ulises-becerra-casanova-03b99926b/">
        <ul className="w-[40px] h-[40px] text-[25px] bg-[#0077B5] rounded-full grid place-content-center text-white z-30"><FaLinkedinIn className=''/></ul>
        </a>
        <a href="https://github.com/UliBecerra">
        <ul className="w-[40px] h-[40px] text-[32px] bg-[#ffffff] rounded-full grid place-content-center text-black z-30"><FaGithub className=''/></ul>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100092865025544">
        <ul className="w-[40px] h-[40px] text-[25px] bg-[#3B5998] rounded-full grid place-content-center text-white z-30"><FaFacebookF className=''/></ul>
        </a>
        <a href="https://www.youtube.com/channel/UCrTVOf9RzvD_BioQIrrJ77A">
        <ul className="w-[40px] h-[40px] text-[25px] bg-[#FF0000] rounded-full grid place-content-center text-white z-30"><FaYoutube className=''/></ul>
        </a>
        <a href="https://t.me/+522311502152">
        <ul className="w-[40px] h-[40px] text-[40px] bg-[#ffffff] rounded-full grid place-content-center text-[#0088cc] z-30"><FaTelegram className=''/></ul>
        </a>
        

      </div>
      </div>
    </div>
  )
}

export default Footer