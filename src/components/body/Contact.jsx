import axios from "axios";
import { useForm } from "react-hook-form";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import './Contact.css'
import { ReactDOM } from "react-dom";
const BASE_URL = 'https://formsubmit.co/ajax/'
const EMAIL = 'aldoulisesbc@gmail.com'
export default function Contact() {
  const { register, handleSubmit, reset, formState:{errors} } = useForm();
  const defaultValues = {
    name: '',
    email: '',
    subject: '',
    description: '',
  }
  const submit = (data) => {
    postForm(data); 
    reset(defaultValues);
  }
  const postForm = (data) => {
    const URL =BASE_URL+EMAIL ;
    console.log(URL)
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios
      .post(URL, data)
      .then((res) =>  alert('El mensaje se ha enviado correctamente'))
      .catch((err) => alert('Ups ocurrio un error'));
   
      };
  

  return (
  <div id="contact" className="relative w-screen z-20 Contact ">
    <div className="absolute right-0 -top-20 -z-20   ">
          <img src="/images/Illustration-footer.png " alt="" />
          </div>
    <section  className=" max-w-[900px] text-white bg-[rgba(47,_47,_138,_0.6)] rounded-[30px]   px-4 grid md:grid-cols-2 m-2 md:mx-auto py-20 z-20 backdrop-blur-md	mb-52 ">
      
          <div className="relative z-10  ">
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
          
          <form onSubmit={handleSubmit(submit)} className="my-[10px] z-30  ">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2  placeholder-white my-[10px]"
              {...register("name", 
              {required: {
                value:true,
                message:'Your must enter your first name'
              },
              minLength:{
                value: 2,
                message: 'Name very short'
              },
              
              })}
            />
             <p className="error  right-0 m-auto font-bold text-[14px] ">{errors.name?.message}</p>
            <input
              type="email"
              name="email"
              id="emial"
              required
              placeholder="Email adresss "
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2  placeholder-white my-[10px]"
              {...register("email", 
            {required: {
              value:true,
              message:'Your must enter your email'
            },
            minLength:{
              value: 1,
              message: 'Email very short'
            },
            maxLength:{
              value:150,
              message: 'Email very long'
            }
            })}
            />
             <p className="error  right-0 m-auto font-bold text-[14px]  ">{errors.email?.message}</p>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2  placeholder-white m     my-[10px]"
              {...register("subject", 
            {required: {
              value:true,
              message:'Please enter your subject'
            },
            minLength:{
              value: 2,
              message: 'Subject very short'
            }
            
            })}
            />
             <p className="error  right-0 m-auto font-bold text-[14px] ">{errors.subject?.message}</p>
            <textarea
              name="description"
              id="message"
              placeholder="Your message"
              className="bg-[#ffffff4d] rounded-[10px] w-full h-[150px] p-2  placeholder-white py-[10px] z-40"
              {...register("description", 
            {required: {
              value:true,
              message:'Please enter your message'
            }
            
            })}
            >
            </textarea>
            <p className="error  right-0 m-auto font-bold text-[14px] ">{errors.description?.message}</p>

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
  )
}
