import { type ReactElement } from "react"
import { Navigate, Outlet } from "react-router-dom"

interface Props {
    children: ReactElement
}
const PrivateRouter: React.FC<Props> = ({children}) => {
    const user = sessionStorage.getItem('token')
    const userObject = user ? JSON.parse(user) : null;
    if(userObject.user.role != 'admin'){
           return <Navigate to={'/login'}/> 
    }
    return children ? children : <Outlet/>
}

export default PrivateRouter
