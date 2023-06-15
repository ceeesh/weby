import ProfileMain from "../components/ProfileMain"
import Sidebar from "../layout/Sidebar"
import { useEffect, useContext } from "react"
import { ClientContext } from "../contexts/ClientContext"
import { getAllProjects } from "../utils/api"
import Header from "../layout/Header"

const Profile = () => {

  const { loginInfo, updateProjects, projects } = useContext(ClientContext)
  

  useEffect(() => {
    getAllProjects({ "Authorization": loginInfo.token })
    .then((res) => {
      updateProjects(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  
  return (
    <>
    <Header />
    <div className="mainBg w-full h-screen flex ">
      
      <Sidebar />
      <ProfileMain />
    </div>
    </>
  )
}

export default Profile