import { ToastContainer } from "react-toastify"
import HandleChange from "../utils/HandleChange"
import { updateClientInfo } from "../utils/api"
import { useState, useContext } from "react";
import { ClientContext } from "../contexts/ClientContext";
import ErrorHandler from "../utils/ErrorHandler";

const ClientInfoModal = ({ setOpenEdit, toggleEdit }) => {

  const { loginInfo, updateLoginInfo } = useContext(ClientContext)
  const [editInput, setEditInput] = useState({
    first_name: loginInfo.first_name,
    last_name: loginInfo.last_name,
    birthday: loginInfo.birthday,
    gender: loginInfo.gender,
    phone_number: loginInfo.phone_number,
    country: loginInfo.country,
  });

  const body = document.querySelector('body')

  const { first_name, last_name, birthday, gender, phone_number, country } = editInput;

  const onSubmit = async (e) => {
    e.preventDefault();

    updateClientInfo(editInput, loginInfo.id, { "Authorization": loginInfo.token })
      .then(res => {
        updateLoginInfo(res.data.user)
        setOpenEdit(false)
        body.classList.remove('hide')
      })
      .catch(err => {
        ErrorHandler(err.response.data.error)
      })
  }
  // updateClientInfo()

  return (
    <div className="w-full h-screen absolute top-0 left-0 text-black  z-0">
      <div className="absolute w-full h-screen bg-black -z-50 opacity-50"></div>
      <ToastContainer />
      <form
        onSubmit={onSubmit}
        className="w-6/12 h-4/5 mx-auto mt-28 bg-white rounded-lg shadow-2xl flex flex-col justify-between">

        <div className="p-10 h-full bg-gray-200 rounded-t-lg">
          <h1 className="border-b border-gray-400 text-2xl pb-5">Edit Profile</h1>

          <div className="flex gap-5 w-full mt-10">

            <div className="w-1/2">
              <label className="block">First Name</label>
              <input
                name="first_name"
                type="text"
                value={first_name}
                onChange={(e) => HandleChange(e, setEditInput)}
                className="border border-gray-400 w-full p-2 rounded"
              />

            </div>

            <div className="w-1/2">
              <label className="block">Last Name</label>
              <input
                name="last_name"
                type="text"
                value={last_name}
                onChange={(e) => HandleChange(e, setEditInput)}
                className="border border-gray-400 w-full p-2 rounded"
              />
            </div>

          </div>

          <div className="flex gap-5 w-full mt-10">
            <div className="w-1/2">
              <label className="block">Birthday</label>
              <input
                type="date"
                name="birthday"
                value={birthday}
                onChange={(e) => HandleChange(e, setEditInput)}
                className="border border-gray-400 p-2 rounded  w-full"
              />

            </div>

            <div className="w-1/2">
              <label className="block">Phone Number</label>
              <input
                type="number"
                name="phone_number"
                value={phone_number}
                onChange={(e) => HandleChange(e, setEditInput)}
                className="border border-gray-400 w-full p-2 rounded" />

            </div>
          </div>

          <div className="flex gap-5 w-full mt-10">

            <div className="w-1/2">
              <label className="block">Gender</label>
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => HandleChange(e, setEditInput)}
                className="border border-gray-400 p-2 rounded  w-full">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>

            </div>

            <div className="w-1/2">
              <label className="block">Country</label>
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => HandleChange(e, setEditInput)}
                className="border border-gray-400 w-full p-2 rounded"
              />
            </div>
          </div>
        </div>



        <div className="border-t rounded-b-lg border-gray-400 p-5 flex flex-row-reverse ">
          <div className="flex">
            <div className="altBg text-white py-2 px-5 rounded mr-5 cursor-pointer duration-300 hover:-translate-y-2 transition-all" onClick={toggleEdit}>Cancel</div>
            <button className="altBg text-white py-2 px-5 rounded duration-300 hover:-translate-y-2 transition-all" >Submit</button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default ClientInfoModal