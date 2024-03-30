import { Link, useLoaderData } from "react-router-dom";
import Header from "../Pages/Include/Header";

export default function Details() {
    const detailsBook = useLoaderData()
    console.log(detailsBook)
    const { name, author, category, description, image, price, ratting, _id } = detailsBook;
    return (
        <div>
            <Header></Header>
            <div className="hero  my-10 bg-[#F5EBE6]">
                <div className="hero-content flex-col md:flex-row">
                    <img src={image} className="md:w-[700px] w-full h-auto md:h-[500px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                        <Link to={`/chackout/${_id}`}><button className="btn bg-[#C27B7F] hover:bg-[#dd9699]">Brrowed Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}