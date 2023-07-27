import React from 'react'
import { Heading } from '../../global/heading/Heading'

export const OutsourcingBenificts = () => {
  return (
    <>
        <section className='bg-dark py-16'>
            <Heading heading={<>Outsource the hard work, enjoy the <span className='text-blue'>benefits</span></>} />
            <p className='text-white text-sm font-normal text-center'>Get financially prepared for whatever life throws your way with help from Fuhnance.</p>

            <div className='grid grid-cols-2 gap-4 items-center container m-auto pt-9'>
                <div>
                    <h6 className='text-white text-xs'>
                        A <span className='text-blue'>Reliable</span> Platform
                    </h6>
                    <p className='text-white py-3'>Get financially prepared for whatever life throws your way with help from Fuhnance.</p>
                    <p className='text-white py-3'>We don’t just help one kind of person. Or one kind of business. Or one kind of nonprofit, family, or trustee. We have a variety of plans for many different investors or traders, and we may just have an account for you.</p>
                    <a href='#' className='bg-blue text-white py-3 px-5 rounded mt-4 inline-block'>Get Started</a>
                </div>
                <div>
                    <img src="../images/graphs.png" alt="" />    
                </div>
            </div>
        </section>
    </>
  )
}
