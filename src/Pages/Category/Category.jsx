import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Category() {

    const [categorys, setcategorys] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/category')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setcategorys(data)
    //         })
    // }, [])


    return (
        <div className="my-16  max-w-[1200px] mx-auto">
            <div className="text-center sm:w-[700px] mx-auto">
                <h5 className="text-[#DD9699] ">Our Category</h5>
                <h2 className="text-5xl font-bold my-4">Here Is Our All Category</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>


            {/* <div className="grid grid-cols-1 gap-10 mt-14 md:grid-cols-2">
                {
                    categorys.map(category => <div>

                        <div className=" bg-[#F5EBE6] md:h-[200px]  md:w-[600px] rounded-2xl   card card-compact sm:w-96">
                            <div className=" md:flex md::flex-row items-center">
                                <img src={category.img} className="md:h-[200px] md:w-[250px] w-full h-[200px] rounded-lg" />
                                <div className="md:p-3 card-body">
                                    <h1 className="text-3xl font-bold">{category.category}</h1>
                                    <p className="py-2">{category.title}</p>
                                    <Link to={`/view/${category._id}`}><button className="btn outline-double outline-[#de767b] md:w-24 hover:bg-[#dd9699]">View All</button></Link>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div> */}


            <div className="grid grid-cols-1 gap-10 mt-14 md:grid-cols-2">
                {/* card 1 */}
                <div className=" bg-[#F5EBE6] md:h-[200px]  md:w-[600px] rounded-2xl   card card-compact sm:w-96">
                    <div className=" md:flex md::flex-row items-center">
                        <img src={'https://i.ibb.co/jrqD0nv/istockphoto-1092170968-612x612.jpg'} className="md:h-[200px] md:w-[250px] w-full h-[200px] rounded-lg" />
                        <div className="md:p-3 card-body">
                            <h1 className="text-3xl font-bold">Art History</h1>
                            <p className="py-2">The Story of Art by E.H. Gombrich</p>
                            <Link to={'/history'}><button className="btn outline-double outline-[#de767b] md:w-24 hover:bg-[#dd9699]">View All</button></Link>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className=" bg-[#F5EBE6] md:h-[200px]  md:w-[600px] rounded-2xl   card card-compact sm:w-96">
                    <div className=" md:flex md::flex-row items-center">
                        <img src={'https://i.ibb.co/0r8bbTF/mistry.jpg'} className="md:h-[200px] md:w-[250px] w-full h-[200px] rounded-lg" />
                        <div className="md:p-3 card-body">
                            <h1 className="text-3xl font-bold">Mistry</h1>
                            <p className="py-2">The Girl with the Dragon Tatto by Stieg Larsson</p>
                            <Link to={'/mistry'}><button className="btn outline-double outline-[#de767b] md:w-24 hover:bg-[#dd9699]">View All</button></Link>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className=" bg-[#F5EBE6] md:h-[200px]  md:w-[600px] rounded-2xl   card card-compact sm:w-96">
                    <div className=" md:flex md::flex-row items-center">
                        <img src={'https://i.ibb.co/1TXcLLM/drowing.webp'} className="md:h-[200px] md:w-[250px] w-full h-[200px] rounded-lg" />
                        <div className="md:p-3 card-body">
                            <h1 className="text-3xl font-bold">Drawing</h1>
                            <p className="py-2">Drawing on the Right Side of the Brain</p>
                            <Link to={'/drawing'}><button className="btn outline-double outline-[#de767b] md:w-24 hover:bg-[#dd9699]">View All</button></Link>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className=" bg-[#F5EBE6] md:h-[200px]  md:w-[600px] rounded-2xl   card card-compact sm:w-96">
                    <div className=" md:flex md::flex-row items-center">
                        <img src={'https://i.ibb.co/b2fDzHk/fashion.png'} className="md:h-[200px] md:w-[250px] w-full h-[200px] rounded-lg" />
                        <div className="md:p-3 card-body">
                            <h1 className="text-3xl font-bold">Fashion</h1>
                            <p className="py-2">The Fashion Book by Editors of Phaidon</p>
                            <Link to={'/fashion'}><button className="btn outline-double outline-[#de767b] md:w-24 hover:bg-[#dd9699]">View All</button></Link>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}