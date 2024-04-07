import {  Route, Routes } from "react-router-dom"
import Layout from "../pages/(website)/Layout"
import HomePage from "../pages/(website)/Homepage/HomePage"
import ShopPage from "../pages/(website)/Shoppage/ShopPage"
import Login from "../pages/(website)/auth/SignIn"
import SignUp from "../pages/(website)/auth/SignUp"
import DetailPage from "../pages/(website)/Detailproduct/DetailPage"
import PrivateRouter from "./PrivateRoute"
import AdminLayout from "../pages/(admin)/Layout"
import ProductList from "../pages/(admin)/Product/List/ProductList"
import Dashboard from "../pages/(admin)/_components/Dashboard"
import CategoryList from "../pages/(admin)/category/list/CategoryList"
import CartPage from "../pages/(website)/cart/CartPage"
import AdminFormProduct from "../pages/(admin)/Product/Form/Form"
import AdminFormProductEdit from "../pages/(admin)/Product/Form/Edit"

const Router = () => {
  return (
    <Routes>
        <Route path="" element={<Layout/>}>
            <Route path="" element={<HomePage/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/detail/:id" element={<DetailPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="cart" element={<CartPage/>}/>
            <Route path="/register" element={<SignUp/>}/>
        </Route>
        <Route path="admin" element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
            <Route index element={<Dashboard/>}/>
            <Route path="products" element={<ProductList/>}/>
            <Route path="products/addproduct" element={<AdminFormProduct/>}/>
            <Route path="products/:id/edit" element={<AdminFormProduct/>}/>
            <Route path="category" element={<CategoryList/>}/>
        </Route>
    </Routes>
  )
}

export default Router
