import ProfileMain from "../components/ProfileMain"
import Sidebar from "../layout/Sidebar"
import Header from "../layout/Header"

const Profile = () => {

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