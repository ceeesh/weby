import Header from "./layout/Header"
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Projects from './pages/Projects'

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  )
}

export default App
