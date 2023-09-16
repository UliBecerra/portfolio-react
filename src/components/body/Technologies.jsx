
export default function Technologies() {
  return (
    <div className="w-full border border-transparent border-t-blue-600  pb-10">
    <h1 className="block m-auto w-auto text-center p-4 text-2xl font-bold">Technologies</h1>
    <div className="m-auto grid gap-6 place-content-center grid-cols-[repeat(auto-fill,_minmax(128px,_1fr))] px-6 p max-w-4xl">
      
      <article className=" hover:scale-110  grid place-content-center pb-3  opacity-50 hover:opacity-100">
      
      <div className="bg-[url(images/Technologies/react.png)] bg-center bg-contain w-32 h-32 "></div>
      <h2 className="text-center">React</h2>
      </article>

      <article className=" hover:scale-110 grid place-content-center pb-3 opacity-50 hover:opacity-100 ">
      
      <div className="bg-[url(images/Technologies/node.png)] bg-center bg-cover w-32 h-32 "></div>
      <h2 className="text-center">Node</h2>
      </article>
      <article className=" hover:scale-110 grid place-content-center pb-3 opacity-50 hover:opacity-100">
      
      <div className="bg-[url(images/Technologies/postgres.png)] bg-center bg-cover w-32 h-32 "></div>
      <h2 className="text-center">Postgres</h2>
      </article>

      <article className=" hover:scale-110  grid place-content-center pb-3 opacity-50 hover:opacity-100">
      
      <div className="bg-[url(images/Technologies/tailwind.png)] bg-center bg-cover w-32 h-32 "></div>
      <h2 className="text-center">Tailwind</h2>
      </article>

      <article className=" hover:scale-110 grid place-content-center  pb-3 opacity-50 hover:opacity-100">
      
      <div className="bg-[url(images/Technologies/next.png)] bg-center bg-cover w-32 h-32 "></div>
      <h2 className="text-center">Next js</h2>
      </article>
      <article className=" hover:scale-110 grid place-content-center pb-3 opacity-50 hover:opacity-100">
      
      <div className="bg-[url(images/Technologies/mongoDB.png)] bg-center bg-cover w-32 h-32 "></div>
      <h2 className="text-center">MongoDb</h2>
      </article>
     

    </div>
    
    </div>
  )
}
