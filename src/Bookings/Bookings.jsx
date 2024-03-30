import { useContext, useEffect, useState } from "react"
import { Authcontext } from "../Provider/AuthProvider"
import Header from "../Pages/Include/Header"
import BookingsCard from "./BookingsCard"
import Swal from "sweetalert2"

export default function Bookings() {
    const { user } = useContext(Authcontext)
    const [bookings, setbookings] = useState()
    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setbookings(data)
            })
    }, [])


    const hendeldelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const remaining=bookings.filter(booking=> booking._id !== id)
                            setbookings(remaining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Header></Header>
           
            <div className="overflow-x-auto my-16 max-w-[1200px] mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>IMAGE</th>
                            <th>BOOK NAME</th>
                            <th>CUSTOMER NAME</th>
                            <th>CUSTOMER EMAIL</th>
                            <th>ACTION</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <BookingsCard key={booking._id} hendeldelete={hendeldelete} booking={booking}></BookingsCard>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    )
}