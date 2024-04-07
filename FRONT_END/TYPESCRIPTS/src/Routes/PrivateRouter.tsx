import { type ReactElement } from "react"
import { Navigate } from "react-router-dom"

interface Props {
    children: ReactElement
}
const PrivateRouter: React.FC<Props> = ({children}) => {
    if(sessionStorage.getItem('token')){
        const user = sessionStorage.getItem('token')
        const userObject = user ? JSON.parse(user) : null;
        if(userObject.user.role === 'admin'){
            return children
        }else{
            return <Navigate to={'/'}/>
        }
    }else{
        return <Navigate to={'/'}/>
    }

}

export default PrivateRouter