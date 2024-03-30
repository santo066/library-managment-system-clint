import { useContext } from "react"
import { Authcontext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

export default function PrivateRoute({ children }) {
    const { loading, user } = useContext(Authcontext)
    const location = useLocation()

    console.log(user)

    if (user?.email) {
        return children;
    }
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>

    }
    
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
}