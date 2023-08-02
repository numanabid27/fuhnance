import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

export default function Header() {

    const [openNav, setOpenNav] = useState(false);
    const location = useLocation();
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <>
            <header>
                <nav className={`${location.pathname === "/platform" ? "bg-white" : "bg-darkblue"}`}>
                    <div className="flex px-6 container m-auto">
                        <div className="flex justify-between items-center py-5">
                            <div>
                                {location.pathname === "/platform" ?
                                    <Link href="/" className="text-color-secondary md:text-[30px] font-semibold text-[20px]">
                                        <img src="./images/palform-logo.png" alt="" />
                                    </Link>
                                    :
                                    <Link href="/" className="text-color-secondary md:text-[30px] font-semibold text-[20px]">
                                        <img src="./images/getting-logo.png" alt="" />
                                    </Link>
                                }
                            </div>
                        </div>
                        <div className="home_nav ml-auto py-2 lg:py-6">
                            <div className="container mx-auto flex items-center justify-center text-blue-gray-900">
                                <div className="hidden lg:block">{<NavList />}</div>

                                <div className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                    ripple={false}
                                    onClick={() => setOpenNav(!openNav)}
                                >
                                    {openNav ? <>{humberger}</> : <>{menuBtn}</>}
                                    <div open={openNav}>
                                        <div className="container mx-auto">{<NavList />}</div>
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

const NavList = () => {
    const location = useLocation();
    const chnageSyleNav = location.pathname === "/platform" ? "text-[#000814]" : "text-white";
    return (
        <>
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
                <li className="p-1 font-normal">
                    <Link to="/" className={`${chnageSyleNav} flex items-center font-normal`}>
                        Home
                    </Link>
                </li>
                <li className="p-1 font-normal item-list">
                    <Link to="/platform" className={`${chnageSyleNav} flex items-center font-normal `}>
                        Platform
                        <span className="ml-1">
                            <IoIosArrowDown />
                        </span>
                    </Link>
                    <ul className="item-menu">
                        <li>
                            <Link to="/platform" className={`${chnageSyleNav} flex items-center font-normal`}>
                                Overview
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="p-1 font-normal item-list">
                    <Link to="/products" className={`${chnageSyleNav} font-normal flex items-center `}>
                        Products
                        <span className="ml-1">
                            <IoIosArrowDown />
                        </span>
                    </Link>
                    <ul className="item-menu">
                        <li>
                            <Link to="" className={`${chnageSyleNav} flex items-center font-normal`}>
                                Stocks
                            </Link>
                        </li>
                        <li>
                            <Link to="/forex" className={`${chnageSyleNav} flex items-center font-normal `}>
                                Forex
                            </Link>
                        </li>
                        <li>
                            <Link to="/options" className={`${chnageSyleNav} flex items-center font-normal `}>
                                Option
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="p-1 font-normal item-list">
                    <Link to="/company" className={`${chnageSyleNav} flex items-center font-normal`}>
                        Company
                        <span className="ml-1">
                            <IoIosArrowDown />
                        </span>
                    </Link>
                    <ul className="item-menu ">
                        <li>
                            <Link to="" className={`${chnageSyleNav} flex items-center font-normal `}>
                                Price
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={`${chnageSyleNav} flex items-center font-normal `}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/feature-advantages" className={`${chnageSyleNav} flex items-center font-normal `}>
                                Feature Advantages
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="p-1 font-normal header_list">
                    <Link to="/company" className="flex items-center font-normal text-white">
                        Get Started
                    </Link>
                </li>
            </ul>
        </>
    )
};

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