import { Link } from "react-router-dom";
import Header from "../Include/Header";
import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";

export default function Register() {

    const { createUser } = useContext(Authcontext)

    const hendelRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
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
                <h2 className="text-4xl  text-center mb-7 font-extrabold">Please <span className="text-[#C27B7F]"> Register</span></h2>
                <form onSubmit={hendelRegister} className="card-body  md:w-3/4 bg-[#f1a887] bg-opacity-50  border-slate-800 rounded-tl-[200px] rounded-br-[200px] mx-auto lg:w-2/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Phone</span>
                        </label>
                        <input type="number" name="phone" placeholder="phone" className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>
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

                    </div>
                    <div className="form-control mt-2">
                        <button className=" h-10 w-48 mx-auto btn text-xl bg-[#C27B7F] hover:bg-[#dd9699] text-white">Register</button>

                    </div>
                    <p className="text-center text-black">You have an acount please <Link className="text-[#ef5b63] font-bold " to={'/login'}>Login</Link></p>
                </form>
            </div>
        </div>
    )
}