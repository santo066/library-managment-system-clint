import { useLoaderData } from "react-router-dom";
import Header from "../Pages/Include/Header";
import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

export default function Chackout() {
    const book = useLoaderData()
    const { name, price, _id, image } = book
    const { user } = useContext(Authcontext)
    const hendelChackOut = (e) => {
        e.preventDefault()
        const form = e.target;
        const username = form.username.value;
        const email = user?.email;
        const date = form.date.value;
        const order = {
            customerName: username,
            email,
            price,
            image,
            date,
            services_id: _id,
            servicesName: name,

        }
        console.log(order)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: "Success!",
                    text: "Your file has been Success.",
                    icon: "success"
                  });
            })
    }
    return (
        <div>
            <Header></Header>
            <h2 className="text-3xl font-bold text-center mt-11">Book Name: {name}</h2>
            <div className="my-9">
                <h2 className="text-4xl  text-center mb-7 font-extrabold">Please <span className="text-[#C27B7F]"> Chackout</span></h2>
                <form onSubmit={hendelChackOut} className="card-body ] md:w-3/4 bg-[#f1a887] bg-opacity-50  rounded-tl-[200px] rounded-br-[200px] mx-auto lg:w-2/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Your Name</span>
                        </label>
                        <input type="text" name="username" placeholder="Your name" className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Your Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Price</span>
                        </label>
                        <input type="number" name="price" defaultValue={price} className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Date</span>
                        </label>
                        <input type="date" name="date" className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>



                    <div className="form-control mt-2">
                        <button className=" h-10 w-48 mx-auto btn text-xl bg-[#C27B7F] hover:bg-[#dd9699] text-white">Comfirm Order</button>
                    </div>
                </form>
            </div>
        </div>
    )
}