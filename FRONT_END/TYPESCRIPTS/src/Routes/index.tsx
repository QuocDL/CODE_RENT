import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/(website)/HomePage/Page'
import Shoppage from '../pages/(website)/ShopPage/Page'
import DetailPage from '../pages/(website)/DetailProduct/Page'
import SignUp from '../pages/(website)/(auth)/SignUp'
import Login from '../pages/(website)/(auth)/SignIn'
import UserLayout from '../pages/(website)/Layout'
import PrivateRouter from './PrivateRouter'
import AdminLayout from '../pages/(admin)/Layout'
import Dashboard from '../pages/(admin)/(product)/Page'
import AdminProductUpdate from '../pages/(admin)/(product)/(formUpdate)/Page'
import AdminProductAdd from '../pages/(admin)/(product)/(formAdd)/page'

const Router = () => {
  return (
    <>
        <Routes>
          <Route path='' element={<UserLayout />}>
              <Route path='' element={<Homepage/>}/>
              <Route path='shop' element={<Shoppage/>}/>
              <Route path='detail/:id' element={<DetailPage/>}/>
              <Route path='signup' element={<SignUp/>}/>
              <Route path='login' element={<Login/>}/>
          </Route>
          <Route path='admin' element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
            <Route index element={<Dashboard/>}/>
            <Route path='addproduct' element={<AdminProductAdd/>}/>
            <Route path='edit/:id/product' element={<AdminProductUpdate/>}/>
          </Route>
        </Routes>
        
        </>
  )
}

export default Router
