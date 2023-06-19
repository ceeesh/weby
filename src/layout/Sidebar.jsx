import placeholder from '../assets/profpic.jpg'
import { useContext } from 'react'
import { ClientContext } from '../contexts/ClientContext'
import { useState } from 'react'
// import { imageUpload } from '../utils/api'
// import HandleChange from '../utils/HandleChange'
// import { useState } from 'react'

const Sidebar = () => {

  const { projects } = useContext(ClientContext)
  // const [image, setImage] = useState(placeholder)

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   imageUpload(
  //     { "Authorization": loginInfo.token },
  //     {
  //       id: loginInfo.id,
  //       image: 
  //     }
  //   )

    // const data = new FormData();
    // data.append("client[profile_pic]", e.target.profile_picture.file)
    // console.log(e.target.profile_picture.files[0])
    // submitToAPI(data)
    //   imageUpload(image, {"Authorization": loginInfo.token})
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  // }

  // function submitToAPI(data) {

  //   fetch("http://localhost:3000/api/v1/create", {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //      'Authorization': loginInfo.token
  //     },
  //     body: data,

  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     setImage(data)
  //     console.log(data)

  //   })
  //   .catch((err) => console.error(err))
  // }






  return (
    <div className="w-[32rem] h-screen text-white">
      <div className="flex flex-col gap-5 p-12 ">
        <div>
          <img src={placeholder} className='w-96' />
          {/* <form className='text-black flex flex-col gap-5' onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                type="file"
                name="profile_picture"
                accept=".png, .jpg, .jpeg, .gif"
                // onChange={(e) => HandleChange(e, setImage)}
                className='text-black p-2 rounded  bg-gray-200 w-full'
              />
              <button type='submit' className='bg-white'>submit</button>
            </div>
          </form> */}
        </div>

        <div>
          <p className='w-full border-b mb-5'>projects</p>

          <div className='flex flex-col gap-5'>
            {projects && projects.slice(0, 2).map((proj, indx) => (
              <div key={indx} className='flex flex-col gap-2'>
                <p>{proj.name}
                  <span className={`${proj.status ? " bg-blue-500 " : "bg-orange-500"} p-2 rounded ml-3 shadow-2xl shadow-slate-700`}>{`${proj.status ? "Completed" : "Ongoing"}`}
                  </span>
                </p>
                <p>{proj.description}</p>
              </div>
            ))}
          </div>

        </div>

        <div>
          <p className='w-full border-b mb-5'>related</p>

          <div>
            <ul>
              <li>Branding</li>
              <li>UI/UX</li>
              <li>Education</li>
              <li>Packaging</li>
              <li>Editorial</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar