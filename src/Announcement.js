import React from 'react'
import Marquee from 'react-fast-marquee'

const Announcement = () => {
  return (
    <div  className="flex items-center bg-[#f4f0eb]">
    <div className="flex 
    items-center justify-end md:w-1/6">
    <div className="bg-black text-right 
    flex-1 p-2">
      <h2 className="text-white font-semibold first-letter
      text-[0.8rem] md:text-1xl ">Announcements</h2>
    </div>
    {/* triangle shape */}
      <div
          class="w-0 h-0 border-t-[8px]
            border-t-transparent
            border-l-[10px] border-l-black
            border-b-[8px] border-b-transparent"></div>
      </div>
      <Marquee gradient={false} speed={50} pauseOnHover className='w-[70%] bg-[#f4f0eb] 
      text-gray-600 p-2 cursor-pointer'
      onMouseOver={()=>this.stop()} >
        Admissions Open for the Academic Year 2021-22.  
      <span className="h-full text-extrabold mx-6 text-[#00692e]"> | </span>
      B.E. in  Computer Science & Engineering/Information Science & Engineering /Artificial Intelligence & Machine Learning /Electronics & Communication Engineering /Mechanical Engineering /Civil Engineering  
      <span className="h-full text-extrabold mx-6 text-[#00692e]"> | </span>
      Contact 9880411361, 9880411363, 9880411364, 7349032929, admissions@cityengineeringcollege.ac.in
      <span className="h-full text-extrabold mx-6 text-[#00692e]"> | </span>
      </Marquee>
  </div>
  )
}

export default Announcement