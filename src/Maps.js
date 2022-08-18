import React from 'react'

const Maps = () => {
  return (
    <div className='flex p-6 md:p-10  bg-[#e6e6e6] w-full'>
                <iframe
                alt='maps' 
                className='w-full h-[600px] flex-1'
                src="https://maps.google.com/maps?q=city%20engineering%20collage&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
    </div>
  )
}

export default Maps