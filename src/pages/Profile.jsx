import ProfileMain from "../components/ProfileMain"
import Sidebar from "../layout/Sidebar"
import Header from "../layout/Header"
import { getAllProjects } from "../utils/api"
import { useEffect } from "react"
import { useContext } from "react"
import { ClientContext } from "../contexts/ClientContext"
import { useState } from "react"

const Profile = () => {

  const { projects, loginInfo, updateProjects } = useContext(ClientContext)
  const [reverseArr, setReverseArr] = useState([]);

    useEffect(() => {
    getAllProjects({ "Authorization": loginInfo.token })
    .then((res) => {
      updateProjects(res.data)
      setReverseArr(res.data.reverse())
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
    <Header />
    <div className="mainBg w-full h-screen flex ">
      
      <Sidebar reverseArr={reverseArr}/>
      <ProfileMain />
    </div>
    </>
  )
}

export default Profile