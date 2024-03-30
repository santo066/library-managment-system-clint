import { Link } from "react-router-dom"

export default function AllBookCard({ book }) {
    console.log(book)
    const { name, author, category, image,_id } = book

    return (
        <div>
            <div className="card card-compact md:w-72 bg-[#F5EBE6] shadow-xl">
                <img src={image} className="w-auto rounded-t-2xl h-56 " alt="Shoes" />
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}><button className="btn bg-[#C27B7F] hover:bg-[#dd9699] ">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}