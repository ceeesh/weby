import placeholder from '../assets/profpic.jpg'
import { useContext, useEffect } from 'react'
import { ClientContext } from '../contexts/ClientContext'
import { getAllBookings, imageUpload } from '../utils/api'
import HandleChange from '../utils/HandleChange'

const Sidebar = () => {

  const { projects, loginInfo, pic, updatePicture, updateBookings, bookings } = useContext(ClientContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("[profile_picture]", e.target.profile_picture.files[0])
    // console.log(e.target.profile_picture.files[0])

    imageUpload(data, loginInfo.id, { "Authorization": loginInfo.token, 'Content-Type': 'multipart/form-data' })
      .then((res) => {
        updatePicture(res.data.profile_picture_url)
      })
      .catch((err) => {
      })
  }

  useEffect(() => {
    getAllBookings({ "Authorization": loginInfo.token })
    .then((res) => {
      updateBookings(res.data)
    })
    .catch((err) => {
    })
  },[])

  return (
    <div className="w-[32rem] h-screen text-white">
      <div className="flex flex-col gap-5 p-12 ">
        <div>
          <img src={pic ? pic : placeholder} className='w-96 max-h-96' />
          <form className={`text-black flex flex-col ${!pic ? `opacity-100` : `opacity-0`}  hover:opacity-100 transition-all`} onSubmit={(e) => handleSubmit(e)}>
            <div className='flex'>
              <input
                type="file"
                name="profile_picture"
                accept=".png, .jpg, .jpeg, .gif"
                // onChange={(e) => HandleChange(e, setImage)}
                className=' p-2 bg-white w-2/5 text-white  cursor-pointer'
              />
              <button type='submit' className='bg-white p-1  w-3/5  cursor-pointer'>Upload</button>
            </div>
          </form>
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
              {/* {bookings && bookings.slice(0,5).map((book, indx) => (
                <li key={indx}>{book.name}</li>
              ))} */}
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