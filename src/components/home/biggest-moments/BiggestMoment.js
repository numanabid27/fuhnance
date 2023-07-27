import React from 'react';
import { Heading } from '../../global/heading/Heading';
export const BiggestMoment = () => {
  return (
    <>
        <section className='bg-dark my-10 py-16'>
            <Heading heading={<><span className='text-blue'>Be ready</span> for life's biggest moments</>} />
            <p className='text-white text-sm font-normal text-center'>Get financially prepared for whatever life throws your way with help from Fuhance.</p>
            <div className='grid grid-cols-2 gap-20 mt-10 container m-auto items-center'>
                <div>
                    <h6 className='text-white text-xs'>Take your trading to the next level</h6>
                    <p className='text-white py-3'>Take your trading to the next level with our latest innovative tools and Fuhance’s most advanced desktop platform, Street Smart Edge</p>
                    <p className='text-white py-3'>Our Client Relationship Summaries offer a brief summary of our services, fees, and obligations when we work with you in a broker-dealer or an investment</p>
                    <a href='#' className='bg-blue text-white py-3 px-5 rounded mt-4 inline-block'>Get Started</a>
                </div>
                <div>
                    <img src='../images/choosee.png' alt="" />
                </div>
            </div>
        </section>
    </>
  )
}
