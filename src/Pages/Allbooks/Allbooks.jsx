import { useLoaderData } from "react-router-dom";
import Header from "../Include/Header";
import AllBookCard from "./AllBookCard";

export default function Allbooks() {
    const books = useLoaderData()
    console.log(books)
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="mt-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
                {
                    books.map(book => <AllBookCard key={book._id} book={book}></AllBookCard>)
                }
            </div>
        </div>
    )
}