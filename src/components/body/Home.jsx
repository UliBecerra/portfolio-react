import { useState } from "react"
import './Home.css'
import { Link } from "react-scroll"
export default function Home() {
  const [showCV, setShowCV] = useState(false)
  return (

    <article id="home" className={` ${showCV ? 'fixed ' : 'flex'}      gap-3 w-full Home h-screen top-0 z-50  `} >
      
      <div className={`${showCV ? 'hidden' : 'block'} relative :static  w-full z-10 grid place-content-center  gap-10 md:w-[1000px] p-2`}>
      <div className={` absolute z-10 w-[370px] h-[435px] -left-[60%]  top-0 md:left-0 md:top-0  bg-[url(/public/images/planethead.png)] bg-no-repeat `}>
      
      </div>
      <h1 className='font-[700] text-3xl z-10 max-w-[500px]'>
      I am <span  className=" inline-flex  typing-machine w-[180px] md:max-w-[220px] border-y-0 py-0 my-0 h-[29px] md:h-[36px]" >Aldo Ulises</span>, a frontend developer and programming passionate, based in Mexico      </h1>
      <div className="grid gap-4 md:flex  md:justify-center md:gap-4">
      <Link className="block m-auto" to="contact" spy={true} smooth={true} offset={-200} duration={500}>
        
      <button  className='m-auto md:m-0 h-[50px] w-[200px] bg-[rgba(255,_255,_255,_0.3)] rounded-3xl text-[17px] shadow-[-1px_-1px_2px_0px_rgba(0,_0,_0,_0.15)] shadow-white '>Hire me</button>
      </Link> 
    
      <button onClick={() => setShowCV(true)} className='m-auto md:m-0 h-[50px] w-[200px] bg-[linear-gradient(107.21deg,_#C961DE_24.43%,_#2954A3_68.95%)] rounded-3xl shadow-[-1px_-1px_2px_0px_rgba(0,_0,_0,_0.15)] shadow-white '>Show CV</button>
      </div>
      </div>
     <div className={`${showCV ? 'visible p-4' : 'hidden'} z-20 fixed w-full h-screen bg-[#0F103F] flex justify-center `}>
      <div className="bg-white/10 m-auto w-[900px] h-full  rounded-md text-end ">
      <button onClick={() => setShowCV(showCV => !showCV)}><i className='bx bx-x text-3xl font-bold p-2 '></i></button>
      {/* <iframe className="w-full md:w-[850px] h-[75vh] m-auto px-5 rounded-md" src="https://docs.google.com/document/d/e/2PACX-1vRhHES0iXXxZGwZ_jljEUH-SkHZ4ONtzAN0sZCz23SL3qUCH9hqT8HB1XnyHJGgBO6-NU5KCA8lGDOV/pub?embedded=true"></iframe> */}
      <div className="relative w-full h-full p-0  pb-0  shadow ; mt-7  mb-4 overflow-hidden rounded-md ">  <iframe loading="lazy" className="m-auto w-4/6  sm:w-2/6 top-0 left-0 right-0; aspect-[3_/_4]"    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFoY1HEB2s&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">  </iframe>
      <div className=" flex justify-center m-auto p-5  ">

      <a href="/public/documents/CV.pdf" download>

      <button  className='m-auto h-[50px] w-[200px] bg-[linear-gradient(107.21deg,_#C961DE_24.43%,_#2954A3_68.95%)] rounded-3xl shadow-[-1px_-1px_2px_0px_rgba(0,_0,_0,_0.15)] shadow-white '  >Download CV</button>
      </a>
      </div>
      </div>
      
      </div>
      </div> 
      <div className="hidden md:block md:absolute h-[200px] right-0">
        <img src="images/ilustration-bottom.png" alt="" />
      </div>
    </article>
  )
}
