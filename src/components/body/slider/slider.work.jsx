import data from '/public/data.json'
import { TbWorld } from "react-icons/tb";
import {FaGithub} from 'react-icons/fa'
import {Swiper, SwiperSlide} from 'swiper/react'

import { Autoplay, Zoom, EffectCoverflow, Pagination, Navigation  } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/zoom'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
function SliderProjects() {
  const [showProject, setshowProject] = useState()
  const handleShowProject = (id) =>{
    setshowProject(id)
   
  }
  
    return (
    <Swiper
    effect={'coverflow'}
    className='w-full pl-4 pr-2 pt-1 relative '
    centeredSlides={true}
    loop={true}
    slidesPerView={2}
    coverflowEffect={{
      rotate: 1,
      stretch: 0,
      depth: 100,
      modifier: 3,
    }}
    autoplay={true}
    
    modules={[Autoplay, Zoom, EffectCoverflow, Pagination, Navigation, Zoom]}
    >
       
      {
        data.projects.map((project) => (
          <SwiperSlide key={project.id} className={` relative    rounded-md bg-[linear-gradient(0deg,_rgba(108,34,195,1)_0%,_rgba(34,193,195,1)_100%)]    h-[260px] min-w-[140px] max-w-[140px] `}>
            
        
          {showProject === project.id ? <div onClick={handleShowProject}>
            <div className='h-full w-full grid rounded-md  items-center justify-center p-1'>
            <div>
            <h2 className=' block font-bold text-center text-sm'>
          {project.title}
        </h2>
        <p className=' block text-xs py-2 text-start '>
        {project.description}
        </p>
            </div>
        <div className="w-full grid grid-cols-2 z-10 text-3xl ">
        <a className='flex justify-center ' href={project.urls[0].url}>
          
          <FaGithub/> 
          </a>
        <a className='flex justify-center' href={project.urls[1].url}>
          <TbWorld/> 
          </a>
        </div>
          </div>
            </div>
          :
        <div onClick={() => handleShowProject(project.id)} className="absolute w-full h-full top-0  z-0  ">
        <img className=' h-full rounded-md cursor-pointer  hover:p-[2px]  ' src={project.image} alt="" />
        </div>
}
      </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SliderProjects