import { TbWorld } from "react-icons/tb";
import {FaGithub} from 'react-icons/fa'
function projecView({project}) {
  return (
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
        <a className='flex justify-center' href="https://ulises-weather-app.netlify.app">
          <TbWorld/> 
          </a>
        </div>
        </div>  )
}

export default projecView