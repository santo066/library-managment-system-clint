import { Link } from "react-router-dom"
import Swal from "sweetalert2";

export default function BookingsCard({ booking, hendeldelete }) {
    const { customerName, date, email, image, servicesName, price, _id } = booking

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => hendeldelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded-xl w-24 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>


            </td>
            <td>
                {servicesName}
            </td>
            <td>
                {customerName}
            </td>
            <td>{email}</td>
            <th>
                <Link to={`/details/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
            </th>
        </tr>
    )
}