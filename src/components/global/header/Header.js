import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import {
    Navbar,
    MobileNav,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDimensions } from "../../../hooks/use-dimensions";

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);


    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
        setOpenNav(false)
    }, [location.pathname]);

    const data = [

        {
            id: 2,
            title: "Platform",
            sublinks: [
                {
                    subtitle: "Overview",
                    sublink: "/platform"
                }
            ]

        },
        {
            id: 3,
            title: "Products",
            sublinks: [
                {
                    subtitle: "Stocks",
                    sublink: "/products"
                },
                {
                    subtitle: "Forex",
                    sublink: "/forex"
                },
                {
                    subtitle: "Options",
                    sublink: "/options"
                }
            ]
        },
        {
            id: 4,
            title: "Company",
            sublinks: [
                {
                    subtitle: "Price",
                    sublink: "/company"
                },
                {
                    subtitle: "About",
                    sublink: "/about"
                },
                {
                    subtitle: "Feature Adnavtages",
                    sublink: "/feature-advantages"
                }
            ]
        },
    ]
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
                    <div className="hidden lg:block">
                        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 md:px-0 px-4">
                            <li className="py-3 px-1 font-normal">
                                <Link to="/" className={`${chnageSyleNav} font-normal flex items-center `}>
                                    Home
                                </Link>
                            </li>
                            {
                                data.map((t, i) => {
                                    return (
                                        <NavList
                                            key={i.toString()}
                                            title={t.title}
                                            sublinks={t.sublinks}
                                            subtitle={t.subtitle}
                                            sublink={t.sublink}
                                        />
                                    )
                                })
                            }
                            <li className="py-3 px-1 font-normal header_list">
                                <Link to="/company" className="flex items-center font-normal text-white">
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                    </div>

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
                                style={{ color: location.pathname === "/platform" && "black" }}
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
                                style={{ color: location.pathname === "/platform" && "black" }}

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
                <MobileNav open={openNav} className={`${openNav ? "aa" : "bb"}`}>
                    <div className="container mx-auto">
                        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 md:px-0 px-4">
                            <li className="py-3 px-1 font-normal">
                                <Link to="/" className={`${chnageSyleNav} font-normal flex items-center `}>
                                    Home
                                </Link>
                            </li>
                            {
                                data.map((t, i) => {
                                    return (
                                        <NavList
                                            key={i.toString()}
                                            isOpen={isOpen === i ? true : false}
                                            title={t.title}
                                            sublinks={t.sublinks}
                                            subtitle={t.subtitle}
                                            sublink={t.sublink}
                                            handleClick={() => {
                                                if (isOpen !== i) {
                                                    return setIsOpen(i)
                                                }
                                                setIsOpen(false)
                                            }}
                                        />
                                    )
                                })
                            }
                            <li className="py-3 px-1 font-normal header_list">
                                <Link to="/company" className="flex items-center font-normal text-white">
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                    </div>
                </MobileNav>
            </Navbar>
        </header>
    );
}


const NavList = ({ id, title, link, sublinks, sublink, subtitle, isOpen, handleClick, }) => {
    const { width } = useDimensions();
    const location = useLocation();
    const chnageSyleNav = location.pathname === "/platform" ? "text-[#000814]" : "text-white";

    return (
        <>
            {
                width && width < 700 ?
                    <>
                        <li className="py-3 px-1 font-normal" onClick={handleClick}>
                            <Link className={`${chnageSyleNav} font-normal flex items-center `} >
                                {title}
                                <span className="ml-1">
                                    <IoIosArrowDown />
                                </span>
                            </Link>
                            <ul className={`${isOpen ? "block" : " hidden"} item-menu`}>
                                {
                                    sublinks?.map(({ sublink, subtitle }, i) => {
                                        return (
                                            <li className="pb-1" key={i.toString()}>
                                                <Link to={sublink} className={`${chnageSyleNav} flex items-center font-normal`}>
                                                    {subtitle}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </li>
                    </>
                    :
                    <>
                        <li className="py-3 px-1 font-normal item-list">
                            <Link className={`${chnageSyleNav} font-normal flex items-center `} >
                                {title}
                                {
                                    sublinks &&
                                    <span className="ml-1">
                                        <IoIosArrowDown />
                                    </span>
                                }
                            </Link>
                            {
                                sublinks &&
                                <ul className="item-menu">
                                    {
                                        sublinks?.map(({ sublink, subtitle }, i) => {
                                            return (
                                                <li className="pb-1" key={i.toString()}>
                                                    <Link to={sublink} className={`${chnageSyleNav} flex items-center font-normal`}>
                                                        {subtitle}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            }

                        </li>

                    </>
            }

        </>
    )
}