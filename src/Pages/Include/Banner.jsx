import Header from "./Header";
import img from "../../assets/image/10001.png"

export default function Banner() {
    return (
        <div className="w-full relative h-auto sm:h-[800px] bg-[#F5EBE6]">
            <div className="static  pt-10 mx-auto max-w-[1200px]">
                <Header></Header>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto mt-12 gap-10  items-center">
                <div>
                    <h4 className="text-[#C27B7F] font-semibold leading-9 tracking-widest">LET'S MAKE THE BEST INVESTMENT</h4>
                    <h2 className="text-[50px] leading-normal font-bold">There Is No Friend As Loyal As A Book</h2>
                    <p className="text-[20px]  mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                    <div className="flex mt-9">
                        <input type="text" placeholder="Type here" className="rounded-l-xl p-2 input-bordered input-warning w-full max-w-xs" />
                        <button className="h-[60px] w-[120px]  bg-[#C27B7F] hover:bg-[#dd9699] rounded-r-xl text-white font-bold">Subscribe</button>
                    </div>
                </div>

                <div className="justify-self-end">
                    <img src={img} alt="" />
                </div>
            </div>

        </div>
    )
}