import Home from './body/Home'
import AboutMe from './body/AboutMe'
import Work from './body/Work'
import Contact from './body/Contact'

export default function Body() {
  return (
    <div className='w-full'>
         

      <Home/>
      <AboutMe id="#about-me"/>
      <Work/>
      <Contact/>
    </div>
  )
}
