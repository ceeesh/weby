import { useEffect } from 'react'
import Header from '../layout/Header'
import { useContext } from 'react'
import { ClientContext } from '../contexts/ClientContext'
import { getAllBookings } from '../utils/api'
import { useState } from 'react'
import { motion } from "framer-motion"
import { fade } from '../utils/motion'

const Bookings = () => {

  const { bookings, updateBookings, loginInfo } = useContext(ClientContext)
  const [reverseArr, setReverseArr] = useState([]);


  useEffect(() => {
    getAllBookings({ "Authorization": loginInfo.token })
      .then((res) => {
        updateBookings(res.data)
        setReverseArr(res.data.reverse())
      })
      .catch((err) => {
      })
  }, [])

  return (
    <>
      <Header />
      <div className="mainBg w-full h-screen pt-14">
        <motion.h1 className='text-center text-6xl text-white mb-5'  variants={fade(0.8, .1)} initial="offscreen" animate="onscreen">Bookings</motion.h1>
        {reverseArr.length !== 0 ?
          <motion.table className="flex-1 basis-2/4 w-auto table-auto mx-auto rounded-md overflow-y-scroll text-white" variants={fade(0.8, .2)} initial="offscreen" animate="onscreen">
            <thead className='bg-purple-600'>
              <tr className='text-2xl'>
                <th className="border py-5 px-20">Status</th>
                <th className="border py-5 px-20">Name</th>
                <th className="border py-5 px-20">Email</th>
                <th className="border py-5 px-20">Starts</th>
                <th className="border py-5 px-20">Ends</th>
              </tr>
            </thead>
            <tbody>
              {reverseArr && reverseArr.slice(0, 10).map((book, indx) => (
                <tr className="hover:text-black text-center" key={indx}>
                  <td className="border   py-3 px-3 text-xl">{book.status}</td>
                  <td className="border py-3 px-3 text-xl">{book.name}</td>
                  <td className="border  py-3 px-3 text-xl">{loginInfo.email}</td>
                  <td className="border  py-3 px-3 text-xl">{`${book.start_date.slice(0,10)}-${book.start_date.slice(12, 16)}`}</td>
                  <td className="border py-3 px-3 text-xl">{`${book.end_date.slice(0,10)}-${book.end_date.slice(12, 16)}`}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
          : <div className="text-center mt-10 text-2xl text-white">No booking yet</div>}
      </div>
    </>
  )
}

export default Bookings

