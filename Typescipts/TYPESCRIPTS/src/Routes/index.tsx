import { Route, Routes } from 'react-router-dom'
import UserLayout from '../pages/Layout'
import Homepage from '../pages/(website)/HomePage/Page'
import Shoppage from '../pages/(website)/ShopPage/Page'
import DetailPage from '../pages/(website)/DetailProduct/Page'
import SignUp from '../pages/(website)/(auth)/SignUp'
import Login from '../pages/(website)/(auth)/SignIn'

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
        </Routes>
        
        </>
  )
}

export default Router
