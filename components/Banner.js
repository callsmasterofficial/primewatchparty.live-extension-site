import React from 'react'
import siteConfig from '../siteConfig'

function Banner() {
  return (
    <div className='w-[80%] py-2  mb-10 m-auto p-0  md:w-screen md:flex md:bg-[#045679] justify-center items-center md:p-3.5'>
        <h1 className='ml-4 primary_text_color md:font-semibold text-lg  md:secondary_text_color  '>{siteConfig.siteName}
        </h1>
        
        <h5 className='ml-4 secondary_text_color md:font-semibold text-lg md:ml-1.5 md:secondary_text_color '>is now available on Google Chrome, Microsoft Edge and Mozilla Firefox</h5>
        
        
        
    </div>

  )
}

export default Banner

