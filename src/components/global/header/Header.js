import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <>
            <header>
                <nav className="bg-darkblue">
                    <div className="flex px-6 container m-auto">
                        <div className="flex justify-between items-center py-5">
                            <div>
                                <Link href="#" className="text-color-secondary md:text-[30px] font-semibold text-[20px]">
                                    <img src="./images/getting-logo.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="home_nav ml-auto py-2 lg:py-6">
                            <div className="container mx-auto flex items-center justify-center text-blue-gray-900">
                                <div className="hidden lg:block">{navList}</div>

                                    <div className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                        ripple={false}
                                        onClick={() => setOpenNav(!openNav)}
                                    >
                                        {openNav ? <>{humberger}</> : <>{menuBtn}</>}
                                        <div open={openNav}>
                                            <div className="container mx-auto">{navList}</div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="p-1 font-normal">
            <Link to="/" className={`text-color-primary flex items-center font-normal text-white`}>
                Home
            </Link>
        </li>
        <li className="p-1 font-normal item-list">
            <Link to="/platform" className={` text-color-primary flex items-center font-normal text-white `}>
                Platform
            </Link>
            <ul className="item-menu">
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        </li>
        <li className="p-1 font-normal">
            <Link to="/products" className={`text-color-primary font-normal flex items-center text-white`}>
                Products
            </Link>
        </li>
        <li className="p-1 font-normal">
            <Link to="#" className={`text-color-primary flex items-center font-normal text-white`}>
                Company
            </Link>
        </li>
        <li className="p-1 font-normal">
            <Link to="#" className="flex items-center text-color-primary font-normal text-white">
                Contact
            </Link>
        </li>
    </ul>
);

const menuBtn = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
        />
    </svg>
);

const humberger = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);