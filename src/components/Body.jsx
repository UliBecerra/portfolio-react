import React from "react";
import Iframe from 'react-iframe'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import SliderProjects from "./SliderProjects";
import Header from '../components/Header'


export default function Body({setShowNav, showNav}) {
  return (
    <div className=" max-h-full ">
      <section className=" w-full h-[450px] flex justify-center  items-center font-poppins mt-[100px]  py-20 md:justify-start md:pl-80 z-10 ">
        <div className="z-10" id="home">
          <h1 className="text-left text-white  text-[30px] font-bold mt-[60px] pl-[20px] md:max-w-md  ">
            Carsljdlsañ
          </h1>

          <div className="grid md:grid-cols-2 place-content-center py-10 ">
          <button className="h-[50px] w-[200px] shadow-md bg-first  block m-auto rounded-[30px] text-white   border-t-slate-300 border-t-[1px] border-b-black border-b-2 text-[17px] mt-[50px] md:m-auto ">
            
            Hire me
          </button>

          <button className="h-[50px] w-[200px] shadow-md bg-gradient-to-br from-[#C961DE] to-[#2954A3] block m-auto rounded-[30px] text-white text-[17px] mt-[30px] md:m-auto cursor-pointer">
            Download CV
          </button>
          </div>
          
        </div>  
      </section>
      <section id="about-me" className=" bg-[url('/public/images/body-first.png')] w-[100%] h-[850px]  bg-cover bg-center md:bg-contain md:bg-no-repeat  md:aspect-square md:mt-32 ">
        <article  className=" absolute text-white text-[13px] right-2 mt-[250px] w-[255px] md:left-1/2 md:-translate-x-[20%]    ">
          <h1 className="text-[20px] py-4 ">
            <strong>About me</strong>
          </h1>
          <h3>
            My name is Aldo Ulises Becerra. I am a student of Academlo. I am
            currently working with html, css and react. I am passionate about
            creating digital experiences with excellent design and good
            functionalities. My goal is to work in a digital company...{" "}
            <strong>read more</strong>
            
          </h3>
        </article>
      </section>

      <section id="work" className="bg-[url('/public/images/body-second.png')] bg-center  bg-cover h-[800px] md:aspect-square md:w-full md:h-[0%] grid md:place-content-center">
        <div className="md:-translate-y-1/3">
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
      

     
        <section id="contact" className=" max-w-[900px] text-white bg-gradient-to-b from-[#2f2f8a99] to-[#2f2f8a1a] rounded-[30px]  py-10 px-4 grid md:grid-cols-2 m-2 md:mx-auto my-10 z-20">
          <div className="">
          <h1 className="font-[700] text-[24px]">Get in touch</h1>
          <h3 className="w-[90%] py-4">
            I'm very approachable and would love to speak to you. Feel free to
            call, send me an email, follow me in social media or simply complete
            the enquiry form
          </h3>
          <ul>
            <i className="flex items-center gap-3 py-5">
              <BsFillTelephoneFill />
              <span>
                <a href=""> +52-2311502152</a>
              </span>
            </i>
            <li className="flex items-center gap-3 py-5">
              <MdOutlineEmail />
              <a href=""> aldoulisesbc@gmail.com</a>
            </li>
          </ul>
          </div>
          <div className="relative ">
            
          <h2 className="text-[23px] font-[700] pt-[25px]">
            Send me a message
          </h2>
          
          <form action="" className="my-[10px] z-30">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2  placeholder-white my-[10px]"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email adresss "
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2  placeholder-white my-[10px]"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Subject"
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2  placeholder-white my-[10px]"
            />
            <textarea
              name=""
              id=""
              placeholder="Your message"
              className="bg-[#ffffff4d] rounded-[10px] w-full h-[150px] p-2  placeholder-white my-[10px]"
            ></textarea>

            <button
              type="submit"
              value="Send message"
              className=" block m-auto h-[50px]  px-5  bg-gradient-to-br from-[#C961DE] to-[#2954A3]   rounded-[10px] text-white text-[17px] mt-[10px] font-[400]  z-20"
            >
              {" "}
              send message{" "}
            </button>
            
          </form>

          {/* Form submit */}
        
          </div>
          
        </section>
      
          
          
    </div>
  );
}
