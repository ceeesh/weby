import { useState } from "react"
import { ClientContext } from "../contexts/ClientContext"
import Header from "../layout/Header"
import { getAllProjects } from "../utils/api"
import { useEffect, useContext} from "react"
import { motion } from "framer-motion"
import { fade } from '../utils/motion'

const Projects = () => {

  const { projects, loginInfo, updateProjects } = useContext(ClientContext)
  const [reverseArr, setReverseArr] = useState([]);

  useEffect(() => {
    getAllProjects({ "Authorization": loginInfo.token })
    .then((res) => {
      updateProjects(res.data)
      setReverseArr(res.data.reverse())
    }).catch((err) => {
    })
  }, [])

  return (
    <>
    <Header/>
    <div className="mainBg w-full h-screen pt-14 text-white">
      <motion.div className="w-5/6 xl:w-3/4 m-auto" variants={fade(0.8, .2)} initial="offscreen" animate="onscreen">
        <h1 className="text-center text-6xl mb-5">Projects</h1>

        <div className="flex flex-col gap-5 h-[650px] xl:h-[800px] overflow-y-auto">
          {reverseArr.length !== 0 ?  reverseArr.map((proj, indx) => (
            <div key={indx} className="border-b">
              <h1 className="text-2xl font-bold">Project Name: <span className="font-thin text-xl">{proj.name}</span></h1>
              <p className="text-2xl font-bold">Description: <span className="font-thin text-xl">{proj.description}</span></p>
              <p className="text-2xl font-bold">Duration: <span className="font-thin text-xl">{proj.duration}</span></p>
            </div>
          )) : <div className="text-center mt-10 text-2xl">No project yet</div>}
        </div>
      </motion.div>
    </div>
    </>
  )
}

export default Projects