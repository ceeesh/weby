import { useContext } from "react";
import { motion } from "framer-motion"
import { bounceIn } from "../utils/motion"
import { Link, useNavigate } from "react-router-dom";
import { ClientContext } from "../contexts/ClientContext";

const Header = () => {
  const navigate = useNavigate();
  const { loginInfo, updateLoginInfo, updateProjects, updatePicture, updateBookings } = useContext(ClientContext)

  const signOut = () => {
    updateLoginInfo(null);
    updateProjects(null);
    updatePicture(null);
    updateBookings(null);

    navigate('/login')
  }

  const notYetAdded = () => {
    alert("this feature is under development");
  };

  return (
    <div className="mainBg flex text-white h-[120px]">
      <div className="flex w-10/12 xl:w-8/12 mx-auto justify-between p-10">
        <motion.div variants={bounceIn(-550, 'spring', 1, 0.3)}
          initial="offscreen"
          animate="onscreen">
          <h1 className="text-7xl font-bold hover:-translate-y-2 transition-all duration-300"><Link to='/'>Weby</Link></h1>
        </motion.div>

        <motion.div className="p-5"
          variants={bounceIn(850, 'spring', 1, 0.3)}
          initial="offscreen"
          animate="onscreen">
          {!loginInfo ?
            <ul className="text-2xl flex gap-8 xl:gap-16">
              <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/intro'>About</Link></li>
              <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/contact'>Contact</Link></li>
              <li className="hover:-translate-y-2 transition-all duration-300"><Link onClick={notYetAdded}>FAQ</Link></li>
              <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/login'>Login</Link></li>
            </ul>
            :
            <ul className="text-2xl flex gap-8 xl:gap-16">
              <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/profile'>Profile</Link></li>
              <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/profile/bookings'>Bookings</Link></li>
              <li className="hover:-translate-y-2 transition-all duration-300"><Link to='/profile/projects'>Projects</Link></li>
              <button onClick={signOut} className="hover:-translate-y-2 transition-all duration-300">Sign Out</button>
            </ul>
          }
        </motion.div>
      </div>
    </div>
  )
}

export default Header