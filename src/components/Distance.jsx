import React from 'react'
import Nav from './Nav'

const Distance = () => {
  return (
    <>
    <Nav/>
<div className="flex items-center justify-center h-screen bg-gray-200">
  <div className="container">
    <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Distance<span className="text-indigo-600">Test</span>
        </h2>
        <h3 className="text-xl md:text-3xl mt-10">Place your device in 40 cm and read the text below</h3>
        <p className="text-xl md:text-2xl mt-10">William Shakespeare was an English playwright, poet and actor</p>
        <p className="text-lg md:text-xl mt-10"> He is widely regarded as the greatest writer in the English language.</p>
        <p className="text-xsm md:text-lg mt-10">This is for checking your Sight only</p>
      </div>
      <div className="flex flex-wrap mt-10 justify-center">
        
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Distance