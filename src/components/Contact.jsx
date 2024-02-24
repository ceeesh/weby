import { useState } from 'react';
import { relateds, budgets } from '../data/DemoData'
import { motion } from "framer-motion"

const Contact = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <div className="mainBg4 h-screen w-full text-white overflow-hidden">
      <motion.div className="w-10/12 xl:w-6/12 h-4/5 mx-auto mt-28"
        whileInView={() => {
          setIsInView(true);
          return {};
        }}
        initial={{ opacity: 0, y: 100, }}
        animate={isInView && { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4, type: "spring", stiffness: 50 } }}>

        <div className="text-5xl flex flex-col gap-4">
          <h1>Love to hear from you,</h1>
          <h1>Get in touch &#128075;</h1>
        </div>

        <form className="mt-10" action='https://formsubmit.co/c2327f49b001d174f968e8e272c63b31' method='POST'>

          <div className="w-full flex gap-5">
            <div className="w-1/2">
              <label className="block text-lg">Your Name</label>
              <input name='name' className="w-full p-4 rounded text-black text-lg bg-[#F3F4F6]" />
            </div>

            <div className="w-1/2">
              <label className="block text-lg">Your Email</label>
              <input name='email' className="w-full p-4 rounded text-black text-lg bg-[#F3F4F6]" />
            </div>
          </div>

          <div className="w-full flex gap-5 mt-10">
            <div className="w-1/2">
              <label className="block text-lg">What are you interested</label>
              <select name='related' className="w-full p-4 rounded text-black text-lg bg-[#F3F4F6]">
                {relateds.map((rel, indx) => (
                  <option key={indx} value={rel} className="text-black">{rel}</option>
                ))}
              </select>
            </div>

            <div className="w-1/2">
              <label className="block text-lg">Project Budget</label>
              <select name='budget' className="w-full p-4 rounded text-black text-lg bg-[#F3F4F6]">
                {budgets.map((budget, indx) => (
                  <option key={indx} value={budget} className="text-black">{budget}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full mt-10">
            <label className="block text-lg">Message</label>
            <textarea name='message' className="w-full rounded h-48 text-black p-4 text-lg bg-[#F3F4F6]"></textarea>
          </div>

          <button type="submit" className="bg-black text-white py-2 w-1/2 rounded hover:bg-white hover:text-black transition-all duration-300 mt-10 xl:mt-16">Just Send!</button>
        </form>

      </motion.div>
    </div>
  )
}

export default Contact