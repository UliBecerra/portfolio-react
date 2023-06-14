import SliderProjects from "./slider/slider.work";


export default function Work() {
  return (
    <section  className="bg-[url('/public/images/body-second.png')] bg-center  bg-cover h-[800px] md:aspect-square md:w-full md:h-[0%] grid md:place-content-center">
    <div id="work" className="md:-translate-y-1/3">
    <h1 className="block text-center text-[30px] text-[#FFFFFF] font-[700] mb-9 md:my-20">
      My recent work
    </h1>
    
    {/* 330 * 300 rounded 30px */}

    <div className="flex flex-col justify-between md:scale-125  w-[310px] h-[330px] rounded-[30px] bg-[#b5f9fd6b]   m-auto">
      <SliderProjects  />
      <div className=" w-[310px] h-[60px] bg-[#0000004d]  rounded-b-[30px] top-10 ">
        <div className="text-[#FFFFFF] text-[24px] font-[700] text-center mt-3">
          Projects
        </div>
      </div>
    </div>
    </div>
  </section>
  )
}
