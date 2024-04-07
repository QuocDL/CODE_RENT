import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../../../style/Sidebar.scss'
const SideBar = () => {
   const navigate = useNavigate()
   const [nameAdmin, setName] = useState('')
   useEffect(()=>{
      if(sessionStorage.getItem('token')){
         const userData = sessionStorage.getItem('token')
         const userObject = userData ? JSON.parse(userData) : null;
         setName(userObject.user.userName)
      }
   },[])
   const handleLogout = ()=>{
      if(sessionStorage.getItem('token')){
         sessionStorage.removeItem('token')
         navigate('/')
      }else{
         alert('ban chua dang nhap')
      }
   }
  return (
   <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
  <div className="text-gray-100 mt-[2.5rem] text-xl">
    <div  className="p-2.5 mb-[25px]  mt-1 flex justify-center items-center">
      <h1 className="font-bold text-gray-200 text-[15px] ml-3">Hello, {nameAdmin}</h1> 
    </div>
    <div className="my-2  bg-gray-600 h-[1px]" />
  </div>
  <div className="p-2.5 mb-[25px] flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
    <i className="bi bi-search text-sm" />
    <input
      type="text"
      placeholder="Search"
      className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
    />
  </div>
  <NavLink to="" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
    <i className="bi bi-house-door-fill" />
    <span className="text-[1.5rem] ml-4 text-gray-200 font-bold">DashBoard</span>
  </NavLink>
  <div></div>
  <NavLink  to="/user_list" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
    <i className="bi bi-bookmark-fill" />
    <span className="text-[1.5rem] ml-4 text-gray-200 font-bold">Category Manager</span>
  </NavLink>
  <NavLink  to="/user_list" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
    <i className="bi bi-bookmark-fill" />
    <span className="text-[1.5rem] ml-4 text-gray-200 font-bold">User Manager</span>
  </NavLink>
  <div className="my-4 bg-gray-600 h-[1px]" />

  <div onClick={()=> handleLogout()} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
    <i className="bi bi-box-arrow-in-right" />
    <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
  </div>
</div>

  )
}

export default SideBar