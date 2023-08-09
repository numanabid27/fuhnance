import React from 'react';
import { Heading } from "../../../components/global/heading/Heading";

export const FuhnanceManifesto = () => {
  return (
    <>
        <section className='bg-dark md:py-20 py-16'>
            <div className='container m-auto side-padding'>
                <Heading heading={<><span className='text-blue'>Fuhnance</span> Manifesto</>} />
                <p className='text-white md:text-sm text-1x1 text-center'>See why we're the trading partner of choice for hundreds of thousands of traders worldwide.</p>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                    <div className='bg-dark-color text-center md:py-10 py-8 md:px-5 px-4'>
                        <img src='./images/eye.png' alt='' className='md:w-12 w-10 m-auto'/>
                        <h6 className='text-center text-white text-[22px] py-4'>Our Vision</h6>
                        <p className='text-grey m-auto max-w-[426px]'>To be the leading global advocate of freedom by accelerating a transition to a more open and fair world.</p>
                    </div>
                    <div className='bg-dark-color text-center md:py-10 py-8 md:px-5 px-4'>
                        <img src='./images/tt.png' alt='' className='md:w-12 w-10 m-auto'/>
                        <h6 className='text-center text-white text-[22px] py-4'>Our Mission</h6>
                        <p className='text-grey m-auto max-w-[426px]'> Inspired by the Market Trading Strategies ,that enables people to transact and interact and deals in Forex , stocks and Options Trading freely and effortlessly around the world.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
