import { motion } from "framer-motion"
import { fade } from '../utils/motion'
import pic from '../assets/6207681.png'

const Intro = () => {
  return (
    <div className="mainBg h-screen w-full text-white overflow-hidden">

      <div className='mx-auto mt-32 w-10/12 xl:w-8/12 flex px-10'>

        <div className='w-1/2 pr-10'>
          <motion.h1 className='text-4xl xl:text-6xl font-bold' variants={fade(0.8, .3)} initial="offscreen" animate="onscreen">Get A Sneak Peek Of Website Designs Before Making A Purchase</motion.h1>
          <motion.p className='text-lg xl:text-xl mt-10' variants={fade(0.8, .4)} initial="offscreen" animate="onscreen">We&apos;ll create a completely new website customized for you. In the event that you are unsatisfied with the design,
            we will discard it without any cost or obligation. </motion.p>
        </div>

        <motion.div className='w-1/2' variants={fade(0.8, .6)} initial="offscreen" animate="onscreen">
          <img className='w-[1500px] ' src={pic} />
        </motion.div>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="mt-40 xl:mt-0">
        <path fill="#F3F4F6" fillOpacity="1" d="M0,256L18.5,229.3C36.9,203,74,149,111,149.3C147.7,149,185,203,222,234.7C258.5,267,295,277,332,234.7C369.2,192,406,96,443,90.7C480,85,517,171,554,192C590.8,213,628,171,665,170.7C701.5,171,738,213,775,208C812.3,203,849,149,886,160C923.1,171,960,245,997,261.3C1033.8,277,1071,235,1108,208C1144.6,181,1182,171,1218,149.3C1255.4,128,1292,96,1329,96C1366.2,96,1403,128,1422,144L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
      </svg>
    </div>
  )
}

export default Intro