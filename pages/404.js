import React from 'react'
import Navbar from "../components/Navbar"
import Error from '../components/404'

export async function getStaticProps(){
  return {
    props:{
      meta:{
        title:"Prime Watch Party - Watch Prime with Your Friends | Install the Extension",
        description:"Prime Watch Party allow users to watch Prime with your friends online. Install the extension for playback sync and a chatbox for interaction.",
        keywords:"Prime Watch Party, Prime Watch Party Extension, Prime Watch Party Chrome Extension, Prime Party, How to use Prime Watch Party",
        pageUrl:"https://www.primewatchparty.com/",
        featuredImage:"/logo.png"
      }
    }
  }
}
function error() {
  return (
    <div className='error_404 '>
      <div>
        <Navbar/>
      </div>
      <Error/>
    </div>
  )
}

export default error