import React from 'react'

function ImageIcon() {
  return (
    <>
    <div className='Icon w-[80%] flex flex-col items-center justify-center m-auto '>
     <div className='Icon-heading border-b-2 border-red-500 mb-5'>
          <h1 className='text-white text-2xl pb-5 pt-5 font-semibold'>What Will You Watch</h1>
     </div>
     <div className='Icon-subheading mb-8'>
       <p className='text-white text-lg font-normal'>Select all services that you have an account for.</p>
     </div>
    </div>

    <div className='IconImg grid-cols-1 w-[40%] sm:grid sm:grid-cols-4 sm:w-[80%] m-auto lg:grid lg:grid-cols-9 '>
      {icondata.map((icon)=>(
          <div className='flex items-center justify-center  sm:py-4 mb-2 md:py-3 sm:px-4 border-2  border-red-700 rounded-md mr-2 ml-2'key={icon.id}>
          <img src={icon.img} alt="" className='h-48 w-20 object-contain sm:w-24 sm:h-24 cursor-pointer transform transition-all duration-200 hover:scale-125 '/>
          </div>
      ))}
      
    </div>
    </>
    
  )
}

export default ImageIcon


const icondata = [
  {
    id: "i1",
    img: "./netflix.png"
  },

  {
    id: "i2",
    img: "./disney.png"
  },

  {
    id: "i3",
    img: "./hbo.png"
  },
  {
    id: "i4",
    img: "./hotstar.png"
  },

  {
    id: "i5",
    img: "./hulu.png"
  },

  {
    id: "i6",
    img: "./Paramount.png"
  },

  {
    id: "i7",
    img: "./Peacock.png"
  },

  {
    id: "i8",
    img: "./prime.png"
  },

  {
    id: "i9",
    img: "./YT.png"
  },
]




