import { useContext } from 'react'
import Intro from '../components/Intro'
import Process from '../components/Process'
import Testimonial from '../components/Testimonial'
import Header from '../layout/Header'
import { ClientContext } from '../contexts/ClientContext'

const Main = () => {
  const { loginInfo, updateLoginInfo, updateProjects, updatePicture } = useContext(ClientContext)

  if (!loginInfo) {
    updateLoginInfo(null);
    updateProjects(null);
    updatePicture(null);
  }


  return (
    <>
      <Header />
      <Intro />
      <Process />
      <Testimonial />
    </>
  )
}

export default Main