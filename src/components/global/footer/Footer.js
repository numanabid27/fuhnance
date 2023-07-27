import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer className='bg-dark pt-9'>
            <div className='flex gap-16 m-auto container footer_row pb-6'>
                <div className='w-[33%]'>
                    <img src='./images/getting-logo.png' alt='' className='w-[68%]'/>
                    <p className='text-white pt-4 font-normal'>Lorem ipsum dolor sit amet consectetur. Integer faucibus purus morbi dui ridiculus eget. Massa enim lacus nunc nisl ullamcorper purus ut tristique. Viverra neque justo proin diam aliquet risus augue libero.</p>
                </div>
                <div className='w-1/4'>
                    <h6 className='text-white text-[20px] font-semibold pb-4'>Platform</h6>
                    <a href='#' className='text-white block pb-3 font-normal'>Stcoks</a>
                    <a href='#' className='text-white block pb-3 font-normal'>Forex</a>
                    <a href='#' className='text-white block pb-3 font-normal'>Options</a>
                </div>
                <div className='w-1/4'>
                    <h6 className='text-white text-[20px] font-semibold pb-4'>Company</h6>
                    <a href='#' className='text-white block pb-3 font-normal'>About</a>
                    <a href='#' className='text-white block pb-3 font-normal'>Fuhnance Advantages</a>
                    <a href='#' className='text-white block pb-3 font-normal'>Pricing</a>
                </div>
                <div className='w-1/4'>
                    <div>
                        <h6 className='text-white text-[20px] font-semibold pb-4'>Contact Us</h6>
                        <a href='mailto:contact@example.com' className='text-white block pb-3 font-normal'>contact@example.com</a>
                        <a href='tel:+92-300-848-8985' className='text-white block pb-3 font-normal'>+92-300-848-8985</a>
                    </div>
                    <div className='pt-4'>
                        <h6 className='text-white text-[20px] font-semibold pb-4'>Follow Us On</h6>
                        <div className='flex'>
                            <a href='#'>
                                <img src='./images/fb.png' alt='' className='w-6' />
                            </a>
                            <a href='#' className='ml-3'>
                                <img src='./images/fb.png' alt='' className='w-6' />
                            </a>
                            <a href='#' className='ml-3'>
                                <img src='./images/fb.png' alt='' className='w-6' />
                            </a>
                            <a href='#' className='ml-3'>
                                <img src='./images/fb.png' alt='' className='w-6' />
                            </a>
                            <a href='#' className='ml-3'>
                                <img src='./images/fb.png' alt='' className='w-6' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between m-auto container py-5'>
                <div>
                    <a href='#' className='text-white text-[14px] mr-2'>Cookies Policy</a>
                    <a href='#' className='text-white text-[14px] mr-2'>Privacy Policy</a>
                    <a href='#' className='text-white text-[14px] mr-2'>Terms & Conditions</a>
                </div>
                <div>
                    <p className='text-white text-[14px]'>© 2023, Fuhnance. All Right Reserved</p>
                </div>
            </div>
        </footer>
    </>
  )
}
