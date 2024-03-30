import { Link } from "react-router-dom"
import logo from "../../assets/image/10002.ico"
import { useContext } from "react"
import { Authcontext } from "../../Provider/AuthProvider"

export default function Header() {

    const { logout, user } = useContext(Authcontext)
    // console.log(user)
    const hendellogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    const link = <>
        <li><Link to={'/'}><a>Home</a></Link></li>
        <li><Link to={'/addbook'}><a>Add Book</a></Link></li>
        <li><Link to={'/allbook'}><a>All Book</a></Link></li>
        <li><Link to={'/booking'}><a> Borrowed Books</a></Link></li>
        <li><Link to={'/register'}><a>Register</a></Link></li>
    </>
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="navbar bg-[#e1cec4] rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <img src={logo} className="w-10" alt="" />
                    <Link to={'/'}><a className="btn btn-ghost  hover:bg-[#dd9699] text-xl">WONTED</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <Link><button onClick={hendellogout} className="btn  bg-[#C27B7F] hover:bg-[#dd9699] ">Logout</button></Link>
                        :
                        <Link to={'/login'}><a className="btn  bg-[#C27B7F] hover:bg-[#dd9699] ">Login</a></Link>
                    }
                </div>
            </div>
        </div>
    )
}