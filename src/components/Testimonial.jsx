import { customers } from '../data/DemoData'

const Testimonial = () => {
  return (
    <div className="mainBg h-screen w-full">
      <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path fill="#F3F4F6" fillOpacity="1" d="M0,128L30,122.7C60,117,120,107,180,117.3C240,128,300,160,360,160C420,160,480,128,540,106.7C600,85,660,75,720,64C780,53,840,43,900,42.7C960,43,1020,53,1080,96C1140,139,1200,213,1260,208C1320,203,1380,117,1410,74.7L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
      </svg>

      <div className="mx-auto pt-52 w-2/3">
        <h1 className="text-5xl italic text-white text-center">Testimonials</h1>
        <p className="text-center text-red-200">Words from our Satisfied customers</p>

        <div className='flex gap-10 mt-10 text-white p-10'>
          {customers.map((cus, indx) => (
            <div className='bg-transparent h-96 p-8 rounded shadow-2xl flex flex-col items-center' key={indx}>
              <div className=''><img src={cus.pic} className='rounded-full w-40' /></div>
              <p className='text-center mt-5'>{cus.comment}</p>

              <div className='mt-10'>
                <p className='text-center text-red-200 font-bold text-2xl'>{cus.name}</p>
                <p className='text-center'>{cus.job}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Testimonial