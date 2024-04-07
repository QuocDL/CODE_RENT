import { Outlet } from 'react-router-dom'
import SideBar from './_components/SideBar'

const AdminLayout = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <main className='w-[100%]'>
         <Outlet/>
      </main>
    </div>
  )
}

export default AdminLayout