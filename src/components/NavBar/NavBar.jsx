import { useState } from "react";
import Link from "./Link";
import { RiMenu2Line} from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
    const routes = [
        {
            "id": 1,
            "path": "/",
            "name": "Home"
        },
        {
            id: 2,
            path: "/service",
            name: "Service"
        },
        {
            id: 3,
            path: "/contact",
            name: "Contact"
        },
        {
            id: 4,
            path: "/about",
            name: "About"
        }
    ]
    const [open, setOpen] = useState(true)
    return (
        <nav className="bg-slate-50 py-5">
            <div className="container mx-auto flex items-center">
                <div onClick={() => setOpen(!open)} className="md:hidden">
                    {
                        open === true ? <RiMenu2Line className="text-3xl" /> : <IoCloseSharp className="text-3xl" />
                    }
                </div>
                <ul className={`md:flex absolute md:static bg-slate-500 md:bg-slate-50 p-5 text-white md:text-black duration-1000 ${open ? 'top-16': '-top-80'}`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;