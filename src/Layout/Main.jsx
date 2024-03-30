import { Outlet } from "react-router-dom";
import Header from "../Pages/Include/Header";
import Footer from "../Pages/Include/Footer";

export default function Main() {
    return (
        <div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}