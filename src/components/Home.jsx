// import React from 'react' 


// const Home = () =>{
//     return(
//         <>
//           <div className='bg-gradient-to-b from-blue-300 to-green-400 p-16 h-screen'>
//             <div className='max-w-md mx-auto'>
//                 <div className='bg-white p-16 rounded-xl drop-shadow-xl flex flex-col space-y-2'>
//                    <form method='POST'>
//                    <p className='text-3xl font-bold text-red-500 text-center underline p-3'>Login Form</p>
//                     <p className='text-lg font-medium'>Username</p>
//                     <input type="text" className='bg-gray-200 w-full px-3 py-2 rounded focus:outline-none'/>
//                     <p className='text-lg font-medium'>Password</p>
//                     <input type="password" className='bg-gray-200 w-full px-3 py-2 rounded focus:outline-none'/>
//                    </form>
//                    <button type="submit" className='bg-blue-500 w-full pt-3 py-2 rounded focus:outline-none font-bold'>Log In</button>
//                 </div>
//             </div>
//           </div>
//         </>
//     )
// }
// export default Home

import React from 'react'
import Distance from './Distance'
import Nav from './Nav'
import  Welcome  from './Welcome'

const Home = () => {
  return (
    <>
    <Nav/>
    <Welcome/>
    
    </>
  )
}

export default Home