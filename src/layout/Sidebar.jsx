import placeholder from '../assets/profpic.jpg'
import { useContext } from 'react'
import { ClientContext } from '../contexts/ClientContext'

const Sidebar = () => {

  const { projects } = useContext(ClientContext)

  return (
    <div className="w-[32rem] h-screen text-white">
      <div className="flex flex-col gap-5 p-12 ">
        <div>
          <img src={placeholder} />
        </div>

        <div>
          <p className='w-full border-b mb-5'>projects</p>

          <div className='flex flex-col gap-5'>
            {projects && projects.slice(0, 2).map((proj, indx) => (
              <div key={indx} className='flex flex-col gap-2'>
                <p>{proj.name}
                  <span className={`${proj.status ? " bg-blue-500 " : "bg-orange-500"} p-2 rounded ml-3`}>{`${proj.status ? "Completed" : "Ongoing"}`}
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