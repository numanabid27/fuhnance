import React from 'react';
import { Heading } from '../../global/heading/Heading';
export const BiggestMoment = () => {
  return (
    <>
        <section className='bg-dark md:py-20 py-14'>
            <div className='container m-auto side-padding'>
                <Heading heading={<><span className='text-blue'>Be ready</span> for life's biggest moments</>} />
                <p className='text-white md:text-sm text-1x1 md:pt-0 pt-2 font-normal text-center'>Get financially prepared for whatever life throws your way with help from Fuhance.</p>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-20 mt-10 container m-auto items-center'>
                    <div>
                        <h6 className='text-white md:text-xs text-md'>Take your trading to the next level</h6>
                        <p className='text-white py-3 ml-0 max-w-[555px]'>Take your trading to the next level with our latest innovative tools and Fuhance’s most advanced desktop platform, Street Smart Edge.</p>
                        <p className='text-white py-3 ml-0 max-w-[555px]'>Our Client Relationship Summaries offer a brief summary of our services, fees, and obligations when we work with you in a broker-dealer or an investment.</p>
                        <a href='#' className='bg-blue text-white py-3 px-5 rounded mt-4 inline-block'>Get Started</a>
                    </div>
                    <div>
                        <img src='../images/choosee.png' alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
