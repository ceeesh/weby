import { useContext, useState } from "react"
import { ClientContext } from "../contexts/ClientContext"
import ProjectModal from "./ProjectModal"

const ProfileMain = () => {

  const { loginInfo } = useContext(ClientContext)
  const [openProject, setOpenProject] = useState(false)
  const body = document.querySelector('body')

  const toggleProject = () => {
        setOpenProject(prevOpenProject => !prevOpenProject)
        !openProject ? body.classList.add('hide') : body.classList.remove('hide')
  }

  return (
    <div className="w-full h-screen text-white p-12">
      <div >

        <div className="mb-20">
          <h1 className="text-4xl">{loginInfo.first_name} {loginInfo.last_name} <span>VERIFIED</span></h1>
        </div>

        <div className="mt-32">
          <button className="bg-blue-500 p-4 rounded" onClick={toggleProject}>Create New Project</button>
        </div>
      </div>

      <div className="mt-10">
        <p className="border-b text-xl">About</p>

        <div className="mt-10">
          <p className="text-xl mb-8">Contact Information</p>
          <div className="text-base flex flex-col gap-2">
            <p>Phone: {loginInfo.phone_number}</p>
            <p>Country: {loginInfo.country}</p>
            <p>Email: {loginInfo.email}</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xl mb-8">Basic Information</p>
          <div className="text-base flex flex-col gap-2">
            <p>Birthday: {loginInfo.birthday}</p>
            <p>Gender: {loginInfo.gender}</p>
          </div>
        </div>
      </div>
      {openProject && <ProjectModal setOpenProject={setOpenProject} toggleProject={toggleProject}/>}
      
      
    </div>
  )
}

export default ProfileMain