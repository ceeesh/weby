import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClientContext } from "../contexts/ClientContext";

const Header = () => {
  const navigate = useNavigate();
  const { loginInfo, updateLoginInfo, updateProjects } = useContext(ClientContext)

  const signOut = () => {
    updateLoginInfo(null);
    updateProjects(null);

    navigate('/login')
  }

  return (
    <div className="mainBg flex text-white h-[120px]">
      <div className="flex w-8/12 mx-auto justify-between p-10">
        <div>
          <h1 className="text-7xl font-bold"><Link to='/'>Weby</Link></h1>
        </div>

        <div className="p-5">
          {!loginInfo ? (
            <ul className="text-2xl flex gap-16">
              <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/'>About</Link></li>
              <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/'>Contact</Link></li>
              <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/'>FAQ</Link></li>
              <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/login'>Login</Link></li>
            </ul>
          ) : 
           <ul className="text-2xl flex gap-16">
            <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/profile'>Profile</Link></li>
            <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/profile/bookings'>Bookings</Link></li>
            <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/profile/projects'>Projects</Link></li>
            <button onClick={signOut} className="hover:-translate-y-2 transition-all duration-300">Sign Out</button>
           </ul>
          }
        </div>
      </div>
    </div>
  )
}

export default Header