import Header from "./layout/Header"
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Projects from './pages/Projects'
import { useContext } from "react";
import { ClientContext } from "./contexts/ClientContext";
import { Navigate } from "react-router-dom";

function App() {

  const { loginInfo } = useContext(ClientContext)

  return (
    <div >
      <Routes>
        {loginInfo ? (
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/profile/projects" element={<Projects />}></Route>
          </Route>
        ) :
          (
            <Route>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Route>
          )
        }
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </div>
  )
}

export default App
