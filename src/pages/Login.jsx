import { useState } from 'react';
import fb from '../assets/facebook.png'
import gog from '../assets/google.png'
import HandleChange from '../utils/HandleChange'
import { logIn } from '../utils/api'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ClientContext } from '../contexts/ClientContext';
import Header from '../layout/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorHandler from '../utils/ErrorHandler';

const Login = () => {
  const navigate = useNavigate();
  const { updateLoginInfo } = useContext(ClientContext)
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;

  const onSubmit = async (e) => {
    e.preventDefault()

    logIn(userInfo)
      .then((res) => {
        updateLoginInfo(res.data.user)
        navigate('/profile')
      })
      .catch((err) => {
        console.log(err)
        ErrorHandler(err.response.data.error)
      })
  }

  return (
    <>
      <Header />
      <div className="mainBg w-full h-screen text-white overflow-auto">
        <ToastContainer />
        <div className="w-[1000px] h-[600px] mx-auto mt-32 flex" >

          <div className="half w-full rounded-tl-lg rounded-bl-lg overflow-hidden">
            <span className='relative top-5 left-3 text-xl px-2 py-1 rounded font-bold bg-white text-black'>WEBY</span>
          </div>

          <div className="w-full bg-white rounded-tr-lg rounded-br-lg  p-5">
            <h1 className='text-black text-center text-3xl font-bold mt-14 mb-10'>LOGIN</h1>
            <form onSubmit={onSubmit} className='text-black flex flex-col gap-5'>

              <div>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => HandleChange(e, setUserInfo)}
                  className='text-black p-2 rounded  bg-gray-200 w-full'
                />
              </div>

              <div>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => HandleChange(e, setUserInfo)}
                  className='text-black p-2 rounded  bg-gray-200 w-full'
                />
              </div>


              <button type='submit' className='altBg text-white rounded px-5 py-2'>Login</button>
            </form>

            <div className='text-black my-8'>
              <p className='text-center'>Or login with</p>

              <div className='flex justify-center gap-3 mt-5 text-center'>
                <div className='p-3 border border-gray-300 rounded w-2/5 flex gap-5 hover:text-gray-500 cursor-pointer'><img src={fb} />Facebook</div>

                <div className='p-3 border border-gray-300 rounded w-2/5 flex gap-5 hover:text-gray-500 cursor-pointer'><img src={gog} />Google</div>
              </div>

            </div>

            <div className='mt-28'>
              <p className='text-black text-center'>Don&apos;t have an account? <Link to="/register" className='underline hover:text-gray-500'>Register here</Link></p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login