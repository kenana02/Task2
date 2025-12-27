  import img from "../assets/Certification-rafiki.jpg"
  import frontimg from "../assets/Developer activity-rafiki.png"
  import backimg from "../assets/Developer activity-amico.png"
  import aimg from "../assets/Robot face-rafiki.png"
export default function Home() {

  return (
    <div className="space-y-10  ">
    <section className=" text-white rounded-xl p-12 flex flex-col md:flex-row items-center justify-between gap-6  ">
   <div className="md:w-1/2 pl-12">
    <h1 className="text-7xl font-bold font-serif text-blue-700">Welcome to {''} <span className="bg-gradient-to-t from-sky-400 to-fuchsia-500 text-transparent bg-clip-text">Prokoders</span></h1>
    <p className="mt-2 text-2xl font-serif text-blue-700">Best Place To Learn FrontEnd Developer!</p>

  </div>
  <div className="md:w-1/2 pl-12">
    <img 
      src={img} 
      alt="Prokoders illustration"
      className=" w-full max-w-sm "
    />
  </div> 
  


</section>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 m-12">

  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl m-6">
    <img src={frontimg} alt="Front-end" className="w-auto h-auto object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-serif mb-2 text-blue-700">Front-End</h2>
      <p className="text-gray-600 text-sm">
        Learn to build user interfaces with HTML, CSS, JavaScript, and React.
      </p>
    </div>
  </div>

  
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl m-6">
    <img src={backimg} alt="Back-end" className="w-auto h-auto object-cover" />
    <div className="p-4">
      <h2 className="text-xl  mb-2 text-blue-700 font-serif">Back-End</h2>
      <p className="text-gray-600 text-sm">
        Build servers and databases with Node.js, Express, and MongoDB.
      </p>
    </div>
  </div>

 
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl m-6">
    <img src={aimg} alt="AI" className="w-auto h-auto object-cover" />
    <div className="p-4">
      <h2 className="text-xl mb-2 text-blue-700 font-serif">AI</h2>
      <p className="text-gray-600 text-sm">
        Explore Artificial Intelligence and Machine Learning with Python and TensorFlow.
      </p>
    </div>
  </div>
</div>
</div>

  )
}