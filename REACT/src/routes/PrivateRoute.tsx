import { type ReactElement } from "react"
import { Navigate } from "react-router-dom"

interface Props {
    children: ReactElement
}
const PrivateRouter: React.FC<Props> = ({children}) => {
    if(localStorage.getItem('user')){
        const user = localStorage.getItem('user')
        const userObject = user ? JSON.parse(user) : null;
        if(userObject.role === 'admin'){
            return children
        }else{
            return <Navigate to={'/'}/>
        }
    }else{
        return <Navigate to={'/'}/>
    }

}

export default PrivateRouter