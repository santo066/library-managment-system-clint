import { Link, useLoaderData } from "react-router-dom"
import Header from "../Include/Header"

export default function Drawing() {
    const books = useLoaderData()
    const historybooks = books.filter(book => book.category == 'Drawing')
    console.log(historybooks)
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] mx-auto gap-7 my-10">
                {
                    historybooks.map(hbook =>
                        <div className="card card-compact md:w-72 bg-[#F5EBE6] shadow-xl">
                            <img src={hbook.image} className="w-auto rounded-t-2xl h-56 " alt="Shoes" />
                            <div className="card-body ">
                                <h2 className="card-title">{hbook.name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/update/${hbook._id}`}><button className="btn bg-[#C27B7F] hover:bg-[#dd9699] ">Update</button></Link>
                                    <Link to={`/details/${hbook._id}`}><button className="btn bg-[#C27B7F] hover:bg-[#dd9699] ">Details</button></Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}