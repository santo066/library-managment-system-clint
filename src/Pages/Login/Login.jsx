import { Link } from "react-router-dom";
import Header from "../Include/Header";
import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";

export default function Login() {
    const { login } = useContext(Authcontext)
    const hendellogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        login(email, password)
            .then(res => {
                const Loginuser = res.user;
                console.log(Loginuser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="my-9">
                <h2 className="text-4xl  text-center mb-7 font-extrabold">Please <span className="text-[#C27B7F]"> Login</span></h2>
                <form onSubmit={hendellogin} className="card-body rounded-tl-[200px] rounded-br-[200px] md:w-3/4 bg-[#f1a887] bg-opacity-50  border-slate-800  mx-auto lg:w-2/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black mx-28">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input sm:w-[500px] mx-auto input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link text-white mx-auto mt-3 text-sm link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button className=" h-10 w-48 mx-auto btn text-xl     bg-[#C27B7F] hover:bg-[#dd9699] text-white">Login</button>

                    </div>
                    <p className="text-center text-black">You do not have an acount please <Link className="text-[#ef5b63] font-bold " to={'/register'}>Register</Link></p>
                </form>
            </div>
        </div>
    )
}