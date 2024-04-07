import { Outlet } from 'react-router-dom'
import SideBar from './_components/Sidebar'

const AdminLayout = () => {
  return (
    <div>
      <SideBar/>
      <main className='ml-[300px]'>
         <Outlet/>
      </main>
    </div>
  )
}

export default AdminLayout