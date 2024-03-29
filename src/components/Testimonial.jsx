import { useState } from 'react';
import { customers } from '../data/DemoData'
import { motion } from "framer-motion"
import { Card } from '@mui/material'

const Testimonial = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <div className="mainBg3  text-black h-screen w-full" >
      <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path fill="#F3F4F6" fillOpacity="1" d="M0,128L30,122.7C60,117,120,107,180,117.3C240,128,300,160,360,160C420,160,480,128,540,106.7C600,85,660,75,720,64C780,53,840,43,900,42.7C960,43,1020,53,1080,96C1140,139,1200,213,1260,208C1320,203,1380,117,1410,74.7L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
      </svg>

      <motion.div className="mx-auto pt-52 w-full xl:w-2/3" whileInView={() => {
        setIsInView(true);
        return {};
      }}
        initial={{ opacity: 0, y: 100, }}
        animate={isInView && { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4, type: "spring", stiffness: 50 } }}>
        <h1 className="text-5xl italic  text-center">Testimonials</h1>
        <p className="text-center text-rose-700">Words from our Satisfied customers</p>

        <div className='flex gap-10 mt-10  p-10'>
          {customers.map((cus, indx) => (
            // <Card>
              <div className='bg-transparent  w-full  h-96 p-8 rounded shadow-2xl flex flex-col items-center hover:-translate-y-6 transition-all duration-300' key={indx}>
                <div className=''><img src={cus.pic} className='rounded-full w-40' /></div>
                <p className='text-center mt-5 xl:w-60'>{cus.comment}</p>

                <div className='mt-5 xl:mt-10'>
                  <p className='text-center text-rose-700	 font-extrabold text-2xl'>{cus.name}</p>
                  <p className='text-center'>{cus.job}</p>
                </div>

              </div>
            // </Card>
          ))}

        </div>
      </motion.div>
    </div>
  )
}

export default Testimonial