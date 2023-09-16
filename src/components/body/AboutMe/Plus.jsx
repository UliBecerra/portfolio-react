import PropTypes from 'prop-types';
import ParticlesBg from '../Particles/Particles';
function Plus({setShowModalPlus}) {
  

  return (
    
    <div className='z-[50] fixed grid place-content-center top-0 min-w-[100vw] min-h-screen bg-[#1c2951] overflow-y-hidden  overflow-hidden [] rounded-b-md '>

      
<div className="relative w-[calc(80vw)] h-[calc(80vh)] bg-black">
<ParticlesBg/>
<h1 className='absolute left-1/2 text-center pt-8 text-3xl -translate-x-1/2'>More About Me</h1>
 <div className="relative h-full w-full flex justify-center items-center gap-8 p-8">
 <img  className="h-[250px] md:h-[300px] lg:h-[400px] rounded-full z-50 bg-white opacity-100" src="images/i/IMG-20230916-WA0022.jpg" alt="" />
 <article>
  <p className='text-xl [text-shadow:#87dfe9_1px_0_10px;]'>Actualmente tengo 19 años, por lo que estoy en constante desarrollo profesional. He sido capaz de investigar y hacer uso de variaas tecnologias como PHP (6 meses), MySql(6 meses), HTML, CSS, JS, React (6 meses), Express (2 meses), Postgres (2 meses), y actualme estoy desarrollando con el uso Typescript, Next y Tailwind; aun que quiero destacar que el desarrollo web es algo que realmente me apasiona y cada vez estoy mas preparado para cualquier desafio.  </p>
  <div className="scale-75">

  </div>
 </article>

 </div>

</div>
<button className='cursor-pointer z-50 bg-slate-900 py-3 rounded-b-lg text-lg hover:[text-shadow:#87dfe9_1px_0_10px;] hover:shadow-blue-800 hover:shadow-md' onClick={()=> setShowModalPlus(ShowModalPlus => false)}> Close</button>

    </div>
  )
}


Plus.propTypes = {
  setShowModalPlus: PropTypes.func.isRequired, // Aquí estamos validando que setShowModalPlus sea una función requerida.
};

export default Plus