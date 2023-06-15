import { process } from '../data/DemoData'


const Process = () => {
  return (
    <div className="bg-gray-100 h-screen w-full overflow-hidden">
      <div className="w-4/5 mx-auto mt-32">
        <h1 className="text-center text-6xl font-bold"><span className="border-b border-black w-ful">How It Works</span></h1>

        <div className="mt-32">
          <div className="flex justify-center gap-10">
            {process.map((proc, indx) => (
              <div key={indx} className="border rounded p-10 w-96 h-96 text-center flex flex-col items-center">
                <img src={proc.pic} className='w-48'/>

                <div>
                  <h1 className='font-bold my-5 text-2xl'>{proc.title}</h1>
                  <p>{proc.desc}</p>
                </div>
              </div>
            ))}

            {/* <div className="bg-white p-10 w-96 h-96 text-center">2</div>
            <div className="bg-white p-10 w-96 h-96 text-center">3</div> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Process