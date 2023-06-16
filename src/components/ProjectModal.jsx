import { useState, useContext } from "react";
import HandleChange from "../utils/HandleChange";
import { createProject } from "../utils/api";
import { ClientContext } from "../contexts/ClientContext";
import ErrorHandler from "../utils/ErrorHandler";
import { ToastContainer } from "react-toastify";

const ProjectModal = ({ toggleProject, setOpenProject }) => {

  const { loginInfo } = useContext(ClientContext)
  const [projectInput, setProjectInput] = useState({
    name: "",
    description: "",
    duration: "More than 6 months",
    priority: "Low",
    price: ""
  });

  const body = document.querySelector('body')

  const { name, description, duration, priority, price } = projectInput;

  const onSubmit = async (e) => {
    e.preventDefault();
    
    createProject(projectInput, { "Authorization": loginInfo.token })
      .then(res => {
        console.log(res)
        setOpenProject(false)
        body.classList.remove('hide')
      })
      .catch(err => {
        console.log(err)
        ErrorHandler(err.response.data.error)
      })
  }

  // h-screen, 4/5

  return (
    <div className="w-full h-screen absolute top-0 left-0 text-black  z-0">
      <div className="absolute w-full h-screen bg-black -z-50 opacity-50"></div>
      <ToastContainer />
      <form
        onSubmit={onSubmit}
        className="w-6/12 h-4/5 mx-auto mt-28 bg-white rounded-lg shadow-2xl flex flex-col justify-between">

        <div className="p-10 h-full bg-gray-200 rounded-t-lg">
          <h1 className="border-b border-gray-400 text-2xl pb-5">Create Project</h1>

          <div className="flex gap-5 w-full mt-10">

            <div className="w-1/2">
              <label className="block">Project Name</label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => HandleChange(e, setProjectInput)}
                className="border w-full p-2 rounded border-gray-400"
              />

            </div>

            <div className="w-1/2">
              <label className="block">Description</label>
              <input
                name="description"
                type="text"
                value={description}
                onChange={(e) => HandleChange(e, setProjectInput)}
                className="border w-full p-2 rounded border-gray-400"
              />
            </div>

          </div>

          <div className="flex gap-5 w-full mt-10">
            <div className="w-1/2">
              <label className="block">Duration</label>
              <select
                name="duration"
                value={duration}
                onChange={(e) => HandleChange(e, setProjectInput)}
                className="border w-full p-2 rounded border-gray-400">
                <option value="More than 6 months">More than 6 months</option>
                <option value="3 to 6 months">3 to 6 months</option>
                <option value="1 to 3 months">1 to 3 months</option>
                <option value="Less than 1 month">Less than 1 month</option>
              </select>

            </div>

            <div className="w-1/2">
              <label className="block">Price</label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => HandleChange(e, setProjectInput)}
                className="border w-full p-2 rounded border-gray-400" />

            </div>
          </div>

          <div className="flex gap-5 w-full mt-10">

            <div className="w-5/12">
              <label className="block">Priority</label>
              <select
                name="priority"
                value={priority}
                onChange={(e) => HandleChange(e, setProjectInput)}
                className="border w-full p-2 rounded border-gray-400" >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

            </div>
          </div>
        </div>



        <div className="border-t rounded-b-lg border-gray-400 p-5 flex flex-row-reverse ">
          <div className="flex">
            <div className="altBg text-white py-2 px-5 rounded mr-5 cursor-pointer" onClick={toggleProject}>Cancel</div>
            <button className="altBg text-white py-2 px-5 rounded" >Create Project</button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default ProjectModal