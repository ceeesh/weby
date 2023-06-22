import ProfileMain from "../components/ProfileMain"
import Sidebar from "../layout/Sidebar"
import Header from "../layout/Header"
import { getAllBookings, getAllProjects } from "../utils/api"
import { useEffect, useContext } from "react"
import { ClientContext } from "../contexts/ClientContext"


const Profile = () => {

  const { loginInfo, updateProjects } = useContext(ClientContext)

    useEffect(() => {
    getAllProjects({ "Authorization": loginInfo.token })
    .then((res) => {
      updateProjects(res.data.reverse())
    }).catch((err) => {
    })
  }, [])

  return (
    <>
    <Header />
    <div className="mainBg w-full h-screen flex ">
      
      <Sidebar/>
      <ProfileMain />
    </div>
    </>
  )
}

export default Profile