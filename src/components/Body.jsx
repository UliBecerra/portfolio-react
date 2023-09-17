import Home from './body/Home'
import AboutMe from './body/AboutMe/AboutMe'
import Work from './body/Work'
import Contact from './body/Contact'
import Technologies from './body/Technologies'
import ParticlesBg from './body/Particles/Particles'

export default function Body() {
  return (
    <div className='w-full'>
         

      <Home/>
      <AboutMe id="#about-me"/>
      <Work/>
      <Technologies/>
      <Contact/>
      <ParticlesBg/>
    </div>
  )
}
