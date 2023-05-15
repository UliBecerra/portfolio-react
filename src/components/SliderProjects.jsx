import React from 'react'
import data from '/public/data.json'
import { TbWorld } from "react-icons/tb";
import {FaGithub} from 'react-icons/fa'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
function SliderProjects() {
  console.log(data.projects[0])
  return (
    <Swiper
    className='w-full p-2 mt-[50px]'
    spaceBetween={8}
    slidesPerView={3}
    autoplay={true}
    modules={[Autoplay]}
    >
       s
      {
        data.projects.map((project) => (
          <SwiperSlide className='h-[180px] relative  bg-[#e5e5e5] rounded-md hover:scale-110 '>
            
        <div className=" p-2 flex flex-col justify-around h-full  ">
        <h2 className=' block font-bold text-center text-sm'>
          {project.title}
        </h2>
        <p className=' block text-xs py-2 text-start '>
        {project.description}
        </p>
        <div className="w-full grid grid-cols-2 z-10 ">
        <a className='flex justify-center cursor-pointer' href="https://github.com/UliBecerra/React-Weather-App">
          
          <FaGithub/> 
          </a>
        <a className='flex justify-center' href="">
          <TbWorld/> 
          </a>
        </div>
        </div>
          
        <div className="absolute w-full h-full top-0 rounded-md z-10 hover:z-0 hover:opacity-0 ">
        <img className=' h-full ' src={project.image} alt="" />
        </div>
      </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SliderProjects