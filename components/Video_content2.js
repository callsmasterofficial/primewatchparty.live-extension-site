import React from 'react'

function Video_content() {
  return (
    <div className="m-auto mt-10 w-[80%] md:flex">
      <div className="-pt[30px] h-fit cursor-pointer  pt-[20px] md:ml-4 md:w-[50%]">
        <h1 className="mb-[20px] text-3xl font-semibold text-white md:text-4xl">
          Now stream Prime Videos with friends living far away!
        </h1>

        <p className="text-white">
          Install the Prime Watch Party for free and stream your favorite Prime
          videos in perfect sync with people. No matter how far you are from
          your loved ones, you can always watch your favorite shows with them.
        </p>
      </div>
      <div className="video-box ml-2 md:mt-0 md:w-[50%]">
        <img
          src="https://web.archive.org/web/20220223080205im_/https://www.primewatchparty.live/wp-content/uploads/2022/01/amazon.jpg"
          alt="no image"
        ></img>
      </div>
    </div>
  )
}

export default Video_content
