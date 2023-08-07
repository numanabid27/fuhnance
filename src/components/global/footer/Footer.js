import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
            <footer className='bg-dark pt-10'>
                <div className='container m-auto side-padding'>
                    <div className='flex lg:gap-16 gap-6 m-auto container footer_row pb-6'>
                        <div className='md:w-[33%] w-full'>
                            <img src='./images/getting-logo.png' alt='' className='w-[68%]' />
                            <p className='text-white pt-6 font-light'>Lorem ipsum dolor sit amet consectetur. Integer faucibus purus morbi dui ridiculus eget. Massa enim lacus nunc nisl ullamcorper purus ut tristique. Viverra neque justo proin diam aliquet risus augue libero.</p>
                        </div>
                        <div className='md:w-1/4 w-full'>
                            <h6 className='text-white text-[20px] font-semibold pb-4'>Platform</h6>
                            <Link to='/products' className='text-white block pb-3 font-light'>Stcoks</Link>
                            <Link to='/forex' className='text-white block pb-3 font-light'>Forex</Link>
                            <Link to='/options' className='text-white block pb-3 font-light'>Options</Link>
                        </div>
                        <div className='md:w-1/4 w-full'>
                            <h6 className='text-white text-[20px] font-semibold pb-4'>Company</h6>
                            <Link to='/about' className='text-white block pb-3 font-light'>About</Link>
                            <Link to='/feature-advantages' className='text-white block pb-3 font-light'>Fuhnance Advantages</Link>
                            <Link to='/company' className='text-white block pb-3 font-light'>Pricing</Link>
                        </div>
                        <div className='md:w-1/4 w-full'>
                            <div>
                                <h6 className='text-white text-[20px] font-semibold pb-4'>Contact Us</h6>
                                <Link to='mailto:contact@exaple.com' className='text-white block pb-3 font-light'>contact@example.com</Link>
                                <Link to='tel:+92-300-848-8985' className='text-white block pb-3 font-light'>+92-300-848-8985</Link>
                            </div>
                            <div className='pt-4'>
                                <h6 className='text-white text-[20px] font-semibold pb-4'>Follow Us On</h6>
                                <div className='flex'>
                                    <a href='#'>
                                        <img src='./images/fb.png' alt='' className='w-5' />
                                    </a>
                                    
                                    <a href='#' className='ml-4'>
                                        <img src='./images/insta.png' alt='' className='w-5' />
                                    </a>
                                    <a href='#' className='ml-4'>
                                        <img src='./images/linkdin.png' alt='' className='w-5' />
                                    </a>
                                    <a href='#' className='ml-4'>
                                        <img src='./images/pintest.png' alt='' className='w-5' />
                                    </a>
                                    <a href='#' className='ml-4'>
                                        <img src='./images/twitter.png' alt='' className='w-5' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between m-auto container py-5 footer_bottom'>
                        <div className='bottom-list'>
                            <Link to='#' className='text-white text-[14px] mr-2'>Cookies Policy</Link>
                            <Link to='#' className='text-white text-[14px] mr-2'>Privacy Policy</Link>
                            <Link to='#' className='text-white text-[14px] mr-2'>Terms & Conditions</Link>
                        </div>
                        <div>
                            <p className='text-white text-[14px] text-center md:text-right md:pt-0 pt-3'>© 2023, Fuhnance. All Right Reserved</p>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}
