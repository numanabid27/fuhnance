import React from 'react';
import {Heading} from "../../../components/global/heading/Heading";

export const FuhnanceForex = () => {
  return (
    <>
        <section className='bg-dark md:py-20 py-14'>
            <div className='container m-auto side-padding'>
               <Heading heading={<>Why <span className='text-blue'>Fuhnance Forex?</span></>} />
               <p className='text-center text-white md:text-sm text-1x1 md:pt-0 pt-2 '>Innovative payment network new kind of money simple and secure access.</p>

               <div className='grid md:grid-cols-2 grid-cols-1 gap-8 mt-12 items-center'>
                <div>   
                    <div className='mb-8'>
                        <h6 className='text-white text-[20px]'>Trade with a trusted broker</h6>
                        <p className='text-grey pt-1'>Our clients trade with trust and confidence knowing their funds are securely held in Tier 1 banks. LCG is a regulated broker.</p>
                    </div>
                    <div className='mb-8'>
                        <h6 className='text-white text-[20px]'>7000+ instruments across 9 asset classes</h6>
                        <p className='text-grey pt-1'>With LCG you can trade thousands of global markets across 9 asset classes including FX, indices, shares, commodities, spot metals, bonds, vanilla options, ETFs.</p>
                    </div>
                    <div className='mb-8'>
                        <h6 className='text-white text-[20px]'>24-hour client support</h6>
                        <p className='text-grey pt-1'>Our professional multilingual customer service team are always available to help and can be contacted 24 hours a day, Sunday to Friday via phone, email or live chat.</p>
                    </div>
                </div>
                <div>
                    <img src="./images/forex-graph.png" alt="" />
                </div>
               </div>
            </div>
        </section>
    </>
  )
}
