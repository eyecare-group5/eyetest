// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function Dropdown() {
//   const [data2, setData2] = useState([]);

//   useEffect( ()=>{
//     const response = axios.get('http://127.0.0.1:8000/registration/')
//     .then(response=>{
//         setData2(response.data);
//         console.log(response)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
//   },[]
//   );
//   const [amount, setAmount] = useState([])
//   const [sender, setSender] = useState([])
//   const [receiver, setReceiver] = useState([])
  
// }

// export default Dropdown

import React from 'react'
import Nav from './Nav'

const Colortest = () => {
  return (
    <>
    <Nav/>
    
    </>
  )
}

export default Colortest