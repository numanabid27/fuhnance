import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import {
    Navbar,
    MobileNav,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const [isOpen, setIsOpen]  = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen);
    }
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const location = useLocation();
    const chnageSyleNav = location.pathname === "/platform" ? "text-[#000814]" : "text-white";
    return (
        <header>
            <Navbar className={`${location.pathname === "/platform" ? "bg-white" : "bg-darkblue"}`}>
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900 side-padding">
                    <div>
                        {location.pathname === "/platform" ?
                            <Link to="/" className="text-color-secondary md:text-[30px] font-semibold text-[20px]">
                                <img src="./images/palform-logo.png" alt="" className="w-3/4 md:w-full" />
                            </Link>
                            :
                            <Link to="/" className="text-color-secondary md:text-[30px] font-semibold text-[20px]">
                                <img src="./images/getting-logo.png" alt="" className="w-3/4 md:w-full" />
                            </Link>
                        }
                    </div>
                    <div className="hidden lg:block">{<NavList />}</div>

                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill='none'
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                style={{color:location.pathname === "/platform" && "black"}}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill='none'
                                stroke="currentColor"
                                strokeWidth={2}
                                style={{color:location.pathname === "/platform" && "black"}}
                                
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    <div className="container mx-auto">
                        {<NavList handleClick={handleClick} isOpen={isOpen} />}
                    </div>
                </MobileNav>
            </Navbar>
        </header>
    );
}


const NavList = () => {
   
    const location = useLocation();
    const chnageSyleNav = location.pathname === "/platform" ? "text-[#000814]" : "text-white";
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 md:px-0 px-4">
            <li className="py-3 px-1 font-normal">
                <Link to="/" className={`${chnageSyleNav} flex items-center font-normal`}>
                    Homes
                </Link>
            </li>
            <li className="py-3 px-1 font-normal item-list">
                <Link to="#" className={`${chnageSyleNav} flex items-center font-normal `}>
                    Platform
                    <span className="ml-1">
                        <IoIosArrowDown />
                    </span>
                </Link>
                <ul className="item-menu">
                    <li className="pb-1">
                        <Link to="/platform" className={`${chnageSyleNav} flex items-center font-normal`}>
                            Overview
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="py-3 px-1 font-normal item-list" >
                <Link to="/products" className={`${chnageSyleNav} font-normal flex items-center `} >
                    Products
                    <span className="ml-1">
                        <IoIosArrowDown />
                    </span>
                </Link>
                <ul className="item-menu">
                    <li className="pb-1">
                        <Link to="/products" className={`${chnageSyleNav} flex items-center font-normal`}>
                            Stocks
                        </Link>
                    </li>
                    <li className="pb-1">
                        <Link to="/forex" className={`${chnageSyleNav} flex items-center font-normal `}>
                            Forex
                        </Link>
                    </li>
                    <li className="pb-1">
                        <Link to="/options" className={`${chnageSyleNav} flex items-center font-normal `}>
                            Option
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="py-3 px-1 font-normal item-list" >
                <Link to="/company" className={`${chnageSyleNav} flex items-center font-normal`}>
                    Company
                    <span className="ml-1">
                        <IoIosArrowDown />
                    </span>
                </Link>
                <ul className="item-menu">
                    <li className="pb-1">
                        <Link to="" className={`${chnageSyleNav} flex items-center font-normal `}>
                            Price
                        </Link>
                    </li>
                    <li className="pb-1">
                        <Link to="/about" className={`${chnageSyleNav} flex items-center font-normal `}>
                            About
                        </Link>
                    </li>
                    <li className="pb-1">
                        <Link to="/feature-advantages" className={`${chnageSyleNav} flex items-center font-normal `}>
                            Feature Advantages
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="py-3 px-1 font-normal header_list">
                <Link to="/company" className="flex items-center font-normal text-white">
                    Get Started
                </Link>
            </li>
        </ul>
    )
}