import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <>
      <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
      </div>
      <ToastContainer/>
    </>
  )
}

export default Layout
