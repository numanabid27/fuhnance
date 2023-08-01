import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

export const OptionsPlay = () => {
  return (
    <>
        <section className='bg-dark-color py-20'>
            <div className='container m-auto'>
                <div className='grid grid-cols-2 gap-12 items-center'>
                    <div>
                        <img src='./images/options-stock.png' />
                    </div>
                    <div>
                        <h3 className='text-xs text-white font-semibold'>FREE Professional-Grade Analytics with Options Play</h3>
                        <ul className='my-5 mx-6'>
                            <li className='text-grey list-disc '>The fully integrated Options Play let's you find opportunities and instantly execute your ideas at First trade. </li>
                            <li className='text-grey list-disc'>Daily bullish and bearish trading ideas</li>
                            <li className='text-grey list-disc'>Instant options strategies based on various market outlooks</li>
                            <li className='text-grey list-disc'>Optimal income opportunities for any Stock or ETF</li>
                        </ul>
                        <a href='#' className='text-blue flex items-center'>Learn more <span className='ml-2'><IoIosArrowForward/></span></a>
                    </div>
                </div>
            </div>
        </section>  
    </>
  ) 
}
