import { useLoaderData } from "react-router-dom"
import Header from "../Pages/Include/Header"
import Swal from "sweetalert2"

export default function Update() {
    const books = useLoaderData([])
    // console.log(books)
    const hendelUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const author = form.author.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;
        const ratting = form.ratting.value;
        const updatebookinfo = { name, author, category, price, description, image, ratting }
        console.log(updatebookinfo)

        fetch(`http://localhost:5000/book/${books._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatebookinfo)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your file has been updated.",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="my-9">
                <h2 className="text-4xl  text-center mb-7 font-extrabold">Update <span className="text-[#C27B7F]"> Your Book</span></h2>
                <form onSubmit={hendelUpdate} className="card-body ] md:w-3/4 bg-[#f1a887] bg-opacity-50  rounded-tl-[200px] rounded-br-[200px] mx-auto lg:w-2/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Book Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={books.name} placeholder="Book name" className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Author Name</span>
                        </label>
                        <input type="text" name="author" defaultValue={books.author} placeholder="Author Name" className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Category</span>
                        </label>
                        {/* <input type="text" name="category" placeholder="Category" className="input sm:w-[500px] mx-auto input-bordered" required /> */}
                        <select className="input sm:w-[500px] mx-auto input-bordered" defaultValue={books.category} name="category" id="">
                            <option value="History">History</option>
                            <option value="Mistry">Mistry</option>
                            <option value="Drawing">Drawing</option>
                            <option value="Fashion">Fashion</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Price</span>
                        </label>
                        <input type="number" name="price" defaultValue={books.price} placeholder="price" className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={books.description} placeholder="Description" className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black passwordext-white mx-28">Image Url</span>
                        </label>
                        <input type="text" name="image" defaultValue={books.image} placeholder="image" className="input sm:w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black mx-28">Ratting</span>
                        </label>
                        <input type="text" name="ratting" defaultValue={books.ratting} placeholder="Ratting" className="input sm:w-[500px] mx-auto input-bordered" required />

                    </div>
                    <div className="form-control mt-2">
                        <button className=" h-10 w-48 mx-auto btn text-xl bg-[#C27B7F] hover:bg-[#dd9699] text-white">Add Products</button>
                    </div>
                </form>
            </div>
        </div>
    )
}