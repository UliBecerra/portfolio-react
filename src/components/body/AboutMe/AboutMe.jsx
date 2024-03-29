import { useState } from 'react'
import Plus from './Plus'
export default function AboutMe() {
  const [showModalPlus, setShowModalPlus] = useState(false)
  return (
    <>
    {
      showModalPlus ? (<Plus setShowModalPlus={setShowModalPlus}/>) : ''
    }
            <div className="block h-[50vh] w-screen"></div>

      <section id="aboutme" className="relative w-full h-[850px] bg-[url(images/body-first.png)] bg-cover bg-center aspect-square md:bg-contain bg-no-repeat">
        <div name="#about-me" id="#about-me" className="absolute  text-white text-[13px] right-2 mt-[250px] w-[255px] md:left-1/2 md:-translate-x-[20%]   ">
        <h1 className="text-[20px] py-4 ">
            <strong >About me</strong>
          </h1>
          <h3>
          My name is Aldo Ulises Becerra. I am a student of Academlo. I am currently working with Next and Taillwind. I am passionate about creating digital experiences with excellent design and good functionalities. My goal is to work in a digital company...{" "}
            <strong onClick={() => setShowModalPlus(showModalPlus => !showModalPlus)}>read more</strong>
            
          </h3>
        </div>
      </section>
      </>
  )
}
