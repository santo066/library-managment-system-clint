import { useLoaderData } from "react-router-dom";
import Banner from "../Include/Banner";
import Header from "../Include/Header";
import { useEffect, useState } from "react";
import ViewAllCard from "./ViewAllCard";

export default function ViewAll() {

    const categorydata = useLoaderData()
    const [books, setbooks] = useState([])
    const {category}=categorydata


    // console.log(name)

    useEffect(() => {
        fetch('http://localhost:5000/book')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setbooks(data)
            })
    }, [])

    const name=category;

    const thisbook = books.filter(book => book.category == name)
    console.log(thisbook)

    return (
        <div>
            <Header></Header>
            
        </div>
    )
}