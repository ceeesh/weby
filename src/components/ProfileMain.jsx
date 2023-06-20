import { useContext, useState } from "react"
import { ClientContext } from "../contexts/ClientContext"
import ProjectModal from "./ProjectModal"
import ClientInfoModal from "./ClientInfoModal"

const ProfileMain = () => {

  const { loginInfo } = useContext(ClientContext)
  const [openProject, setOpenProject] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const body = document.querySelector('body')

  const toggleProject = () => {
        setOpenProject(prevOpenProject => !prevOpenProject)
        !openProject ? body.classList.add('hide') : body.classList.remove('hide')
  }

  const toggleEdit = () => {
    setOpenEdit(prevOpenEdit => !prevOpenEdit)
    !openEdit ? body.classList.add('hide') : body.classList.remove('hide')
}

  return (
    <div className="w-full h-screen text-white p-12">
      <div >

        <div className="mb-20">
          <h1 className="text-4xl font-bold tracking-wider ">{loginInfo.first_name} {loginInfo.last_name}</h1>
          <button className="p-2 bg-blue-500 mt-5 rounded hover:-translate-y-2 transition-all shadow-2xl shadow-slate-700 duration-300" onClick={toggleEdit}>Edit Profile</button>
        </div>

        <div className="mt-32">
          <button className="bg-blue-500 p-4 rounded hover:-translate-y-2 transition-all shadow-2xl duration-300" onClick={toggleProject}>Create New Project and Schedule Your Meeting</button>
        </div>
      </div>

      <div className="mt-10">
        <p className="border-b text-xl">About</p>

        <div className="mt-10">
          <p className="text-xl mb-8">Contact Information</p>
          <div className="text-base flex flex-col gap-2">
            <p className="text-xl font-bold tracking-wider">Phone: <span className="font-thin text-base tracking-tight">{loginInfo.phone_number}</span></p>
            <p className="text-xl font-bold tracking-wider">Country: <span className="font-thin text-base tracking-tight">{loginInfo.country}</span></p>
            <p className="text-xl font-bold tracking-wider">Email: <span className="font-thin text-base tracking-tight">{loginInfo.email}</span></p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xl mb-8">Basic Information</p>
          <div className="text-base flex flex-col gap-2">
            <p className="text-xl font-bold tracking-wider">Birthday: <span className="font-thin text-base tracking-tight">{loginInfo.birthday}</span></p>
            <p className="text-xl font-bold tracking-wider">Gender: <span className="font-thin text-base tracking-tight">{loginInfo.gender}</span></p>
          </div>
        </div>
      </div>
      {openProject && <ProjectModal setOpenProject={setOpenProject} toggleProject={toggleProject}/>}
      {openEdit && <ClientInfoModal setOpenEdit={setOpenEdit} toggleEdit={toggleEdit}/>}
      
    </div>
  )
}

export default ProfileMain