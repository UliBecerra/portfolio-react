import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Body from './components/Body'

import './App.css'
import NavBar from './components/NavBar'


function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App min-h-screen  bg-[#0F103F]">
      {
       /*  showNav && 
        <NavBar showNav={showNav} setShowNav={setShowNav}/> */
        showNav &&
        <article className='fixed min-w-full min-h-[450px] z-10 text-red-400 grid items-start  top-0  '>
          
          <Footer setShowNav={setShowNav} showNav={showNav}></Footer>
          <h1 onClick={() => (setShowNav(showNav => !showNav))} className='absolute text-3xl text-white right-0 p-5'>x</h1> </article>
        

      }
      <Header setShowNav={setShowNav} showNav={showNav}/>
      <section className={`-top-[450px]`}>
      <Body   className=' ' setShowNav={setShowNav} showNav={showNav} />
      </section>
      <section className={`${showNav ? 'hidden' : 'visible'}`}>
      <Footer  />
      </section>
    </div>
  )
}

export default App
