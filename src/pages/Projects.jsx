import { useContext } from "react"
import { ClientContext } from "../contexts/ClientContext"
import Header from "../layout/Header"

const Projects = () => {
  const { projects } = useContext(ClientContext)

  return (
    <>
    <Header/>
    <div className="mainBg w-full h-screen pt-14 text-white">
      <div className="w-3/4 m-auto">
        <h1 className="text-center text-6xl">Projects</h1>

        <div className="flex flex-col gap-5 h-[800px] overflow-y-auto">
          {projects ? projects.reverse().map((proj, indx) => (
            <div key={indx} className="border-b">
              <h1 className="text-2xl font-bold">Project Name: <span className="font-thin text-xl">{proj.name}</span></h1>
              <p className="text-2xl font-bold">Description: <span className="font-thin text-xl">{proj.description}</span></p>
              <p className="text-2xl font-bold">Duration: <span className="font-thin text-xl">{proj.duration}</span></p>
            </div>
          )) : <div>No project yet</div>}
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects