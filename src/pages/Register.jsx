import { useNavigate } from "react-router-dom"
import { registerAcc } from "../utils/api"
import HandleChange from "../utils/HandleChange";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import ErrorHandler from "../utils/ErrorHandler";
import Header from "../layout/Header";
import { countries } from '../data/DemoData'

const Register = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
    birthday: "",
    gender: "Male",
    phone_number: "",
    country: "PH",
  });

  const { email, password, password_confirmation, first_name, last_name, birthday, gender, phone_number, country } = userInput;

  const onSubmit = async (e) => {
    e.preventDefault();

    registerAcc(userInput)
      .then(res => {
        navigate("/login");
      }).catch(err => {
        ErrorHandler(err.response.data.error);
      })

  };


  return (
    <>
    <Header/>
    <div className="mainBg w-full h-screen text-white overflow-auto">
      <ToastContainer />
      <form className="w-[1000px] h-[600px] mx-auto mt-32 flex shadow-2xl" onSubmit={onSubmit}>

        <div className="bg-white w-full rounded-tl-lg rounded-bl-lg overflow-hidden text-black p-8" >
          <h1 className='text-3xl '>General Information</h1>

          <div className="flex flex-col gap-5 mt-10 text-xl">
            <div className="flex gap-5">
              <label className="py-2 w-2/5">First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="Juan"
                value={first_name}
                onChange={(e) => HandleChange(e, setUserInput)}
                className="border border-gray-400 p-2 rounded w-full"
              />
            </div>

            <div className="flex gap-5">
              <label className="py-2 w-2/5">Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Dela Cruz"
                value={last_name}
                onChange={(e) => HandleChange(e, setUserInput)}
                className="border border-gray-400 p-2 rounded w-full"
              />
            </div>

            <div className="flex gap-5">
              <label className="py-2 w-2/5">Birthday</label>
              <input
                type="date"
                name="birthday"
                value={birthday}
                onChange={(e) => HandleChange(e, setUserInput)}
                className="border border-gray-400 p-2 rounded  w-full"
              />
            </div>

            <div className="flex gap-5">
              <label className="py-2 w-2/5">Gender</label>
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => HandleChange(e, setUserInput)}
                className="border border-gray-400 p-2 rounded  w-full">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

        </div>

        <div className="w-full altBg rounded-tr-lg rounded-br-lg p-8">
          <h1 className="text-3xl ">Contact Details</h1>

          <div className="flex flex-col gap-5 mt-10 text-xl">
            <div className="flex gap-5">
              <label className="py-2 w-2/5">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email@email.com"
                value={email}
                onChange={(e) => HandleChange(e, setUserInput)}
                className="bg-transparent border border-white ph p-2 rounded w-full text-white ph"
              />
            </div>

            <div className="flex gap-5">
              <label className="py-2 w-2/5">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => HandleChange(e, setUserInput)}
                className="bg-transparent border border-white ph p-2 rounded w-full text-white"
              />
            </div>

            <div className="flex gap-5">
              <label className="py-2 w-2/5">Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                placeholder="Confirm Password"
                value={password_confirmation}
                onChange={(e) => HandleChange(e, setUserInput)}
                className="bg-transparent border border-white ph p-2 rounded  w-full text-white"
              />
            </div>

            <div className="flex gap-5">
              <label className="py-2 w-2/5">Phone Number</label>
              <input
                type="tel"
                name="phone_number"
                placeholder="123-45-678"
                value={phone_number}
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={(e) => HandleChange(e, setUserInput)}
                className="bg-transparent border border-white ph p-2 rounded  w-full text-white"
              />
            </div>

            <div className="flex gap-5">
              <label className="py-2 w-2/5">Country</label>
              <select
                name="country"
                id="country"
                value={country}
                onChange={(e) => HandleChange(e, setUserInput)}
                className="bg-transparent border border-white ph p-2 rounded w-full">
                  {countries.map((country, indx) => (
                    <option key={indx} value={country} className="text-black ph">{country}</option>
                  ))}
              
              </select>
            </div>

            <div className="mt-5 mb-5">
              <button className="bg-white py-2 px-12 text-black rounded hover:bg-black transition-all duration-300 hover:text-white">REGISTER</button>
            </div>
          </div>
        </div>

      </form>
    </div>
    </>
  )
}

export default Register