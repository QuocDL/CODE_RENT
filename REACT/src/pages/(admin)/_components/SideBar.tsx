import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../../../styles/sidebar.scss'
import Dialog from "../../../components/Dialog";
const SideBar = () => {
   const navigate = useNavigate()
   const [nameAdmin, setName] = useState('')
   useEffect(()=>{
      if(localStorage.getItem('user')){
         const userData = localStorage.getItem('user')
         const userObject = userData ? JSON.parse(userData) : null;
         setName(userObject.userName)
      }
   },[])

   const handleLogout = ()=>{
      handleDialog(`Bạn có chắc chắn muốn đăng xuất?`, true)
   }
        const [dialog, setDialog] = useState({
        message: "",
        status: false
    })
     const handleDialog =(message: string, status: boolean)=>{
        setDialog({
            message: message,
            status: status
        })
    }
     const conFirmDialog = (choose: boolean)=>{
        if(choose){
            if(localStorage.getItem('token')){
              localStorage.removeItem('token')
              navigate('/')
            }else{
              alert('Đã xảy ra lõi!')
            }
            handleDialog('',false)
        }else{
            handleDialog('', false)
        }
    }

  return (
   <div className="sidebar h-screen lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
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
  <NavLink to="products" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
    <i className="bi bi-house-door-fill" />
    <span className="text-[1.5rem] ml-4 text-gray-200 font-bold">DashBoard</span>
  </NavLink>
  <div></div>
  <NavLink  to="category" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
    <i className="bi bi-bookmark-fill" />
    <span className="text-[1.5rem] ml-4 text-gray-200 font-bold">Category Manager</span>
  </NavLink>
  <NavLink  to="user_list" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
    <i className="bi bi-bookmark-fill" />
    <span className="text-[1.5rem] ml-4 text-gray-200 font-bold">User Manager</span>
  </NavLink>
  <div className="my-4 bg-gray-600 h-[1px]" />

  <div onClick={()=> handleLogout()} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
    <i className="bi bi-box-arrow-in-right" />
    <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
  </div>
            {dialog.status && <Dialog onDialog={conFirmDialog} message={dialog.message}/>}

</div>

  )
}

export default SideBar