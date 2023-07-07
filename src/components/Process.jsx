import { useState } from 'react';
import { process } from '../data/DemoData'
import { motion } from "framer-motion"


const Process = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="bg-gray-100 h-screen w-full overflow-hidden"
    >
      <motion.div className="w-4/5 mx-auto mt-32"  whileInView={() => {
        setIsInView(true);
        return {};
      }}
      initial={{ opacity: 0, y: 100, }}
      animate={isInView && { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4, type: "spring", stiffness: 50 } }}>
        <h1 className="text-center text-6xl font-bold"><span className="border-b border-black w-ful">How It Works</span></h1>

        <div className="mt-32">
          <div className="flex justify-center gap-10">
            {process.map((proc, indx) => (
              <div key={indx} className="border rounded p-7 xl:p-10 w-96 h-96 text-center flex flex-col items-center">
                <img src={proc.pic} className='w-48' />

                <div>
                  <h1 className='font-bold my-2 xl:my-5 text-xl xl:text-2xl'>{proc.title}</h1>
                  <p>{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default Process