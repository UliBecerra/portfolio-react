
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import Proyects from './components/Proyects'
import MoreAboutMe from './components/MoreAboutMe'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path='/about-me' element={<MoreAboutMe/>} />
        <Route path="/proyects" element={<Proyects />} />
      </Routes>
    </HashRouter>
     
    
  )
}

export default App

function Content() {
  return(
    <div className='relative w-full font-[Poppins] bg-[#0F103F] text-white min-h-screen overflow-hidden scroll-smooth '>
        
    <Header/>
  
      <Body  />
   

      
    <Footer/>
    
      </div>
  )
}