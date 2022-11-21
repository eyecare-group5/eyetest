
// import React, {useState} from 'react';

// const Nav = () =>{
//   const[toggle, setToggle]=useState(false)
//   const handletoogle = () =>{
//     setToggle(!toggle)
//   }
// }
//  {
//   return (
//     <>
//       <button onClick={()=>handletoogle()} className='bg-blue-600 p-3'>Dropdown</button>
//       {toggle? <div>
//         <p>mtn</p>
//         <p>tigo</p>
//       </div>:<span></span>}
//     </>
//   );
// }

// export default Nav
// import React,{useState,useEffect} from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// import '../App.css'

// import axios from 'axios';

// function Nav(){
//          const [data2, setData2] = useState([]);
//          //let fetch information
//          useEffect( ()=>{
//             // async await
//            const response = axios.get('http://127.0.0.1:8000/sendmoney/')
//            .then(response=>{
//              setData2(response.data);
//              console.log(response)
//            })
//            .catch((err)=>{
//              console.log(err)
//            })
//          } ,[]
//          );
//      const [amount,setAmount]=useState([]);
//      const  [sender, setSender]=useState([]);
//      const [receiver, setReceiver]=useState([]);
//      const [phone, setPhone]=useState([]);
//      const[success,setSuccess]=useState(false);
//      const[notsuccess,setNosuccess]=useState(false);
//     const handleSubmit=(event)=>{
//         event.preventDefault();
//             const data={
//                 "amount": amount,
//                 "sender": sender,
//                 "receiver": receiver,
//                 "receiverPhone": phone
//             }
//             axios.post("http://127.0.0.1:8000/sendmoney/",data)
//                 .then((res)=>{
//                     console.log(res.data)
//                     setSuccess("Data Sent Successfull")
//                 })
//                 .catch((err)=>{
//                     console.log(err)
//                     setNosuccess("oops! plz check well..")
//                 })
//     }
//     return(
//         <>
//     <div className="container">
//         <div className="flex flex-wrap">
//             <div className="w-1/2">
//                 <div>
//                     <h1
//                         data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
//                         className="py-12 text-4xl font-bold text-center text-gray-600 md:text-4xl ">select data</h1>
//                 </div>
//                 <div>

//                     {data2.map( (item,key)=>{
//                             return(
//                                 <div className="bg-blue-400 p-4 text-black grid gap-2 m-2">
//                                     <span className="text-lg font-bold">Sender: {item.sender}</span>
//                                     <span className="text-lg font-bold">Email: {item.amount}</span>
//                                     <span className="text-lg font-bold">Phone: {item.receiver}</span>
//                                 </div>
//                             )
//                         }
//                     )}
//                 </div>
//             </div>
//             <div className="w-1/2">

//                 <div>
//                     <h1
//                         data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
//                         className="py-12 text-4xl font-bold text-center text-gray-600 md:text-4xl ">Send data</h1>
//                 </div>
//                 <div className="w-full">
//                     <div className="bg-gray-100">
//                         {success? <p className="bg-green-200 pr-4 pl-4 pt-2 pb-2 font-medium text-red-800">{success}</p>
//                             :<span></span>}
//                         {notsuccess? <p className="bg-red-200 pr-4 pl-4 pt-2 pb-2 font-medium text-red-800">{notsuccess}</p>
//                             :<span></span>}
//                         <form className="p-4" onSubmit={handleSubmit}>
//                             <label className="capitalize text-blue-900 font-semibold">Amount</label>
//                             <input type="text" value={amount} onChange={event => setAmount(event.target.value)} className="inputDesign"/>
//                             <label className="capitalize text-blue-900 font-semibold">Sender</label>
//                             <input type="text" value={sender} onChange={event => setSender(event.target.value)}  className="inputDesign"/>
//                             <label className="capitalize text-blue-900 font-semibold">Receiver</label>
//                             <input type="text" value={receiver} onChange={event => setReceiver(event.target.value)}  className="inputDesign"/>
//                             <label className="capitalize text-blue-900 font-semibold">Phone</label>
//                             <input type="text" value={phone} onChange={event => setPhone(event.target.value)} className="inputDesign"/>

//                             <button name="" type="submit" value="submit"  className="bg-blue-400 hover:bg-blue-600 w-full rounded-b py-2 my-2 font-semibold text-gray-100">
// Submit
//                             </button>
//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//         </>
        
//     )
// }
// export default Nav;

import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className="navbar bg-zinc-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Distance">Distance</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">EyeTest</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link to="/">Home</Link></li>
        <li><Link to="/Distance">Distance</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
    </ul>
  </div>

</div>
    </>
  )
}

export default Nav