import React from 'react';
import { Heading } from "../../../components/global/heading/Heading";

export const FuhnanceManifesto = () => {
  return (
    <>
        <section className='bg-dark py-20'>
            <div className='container m-auto'>
                <Heading heading={<><span className='text-blue'>Fuhnance</span> Manifesto</>} />
                <p className='text-white text-sm text-center'>See why we're the trading partner of choice for hundreds of thousands of traders worldwide.</p>

                <div className='grid grid-cols-2 gap-6 mt-10'>
                    <div className='bg-dark-color text-center py-10 px-5'>
                        <img src='./images/eye.png' alt='' className='w-12 m-auto'/>
                        <h6 className='text-center text-white text-[22px] py-4'>Our Vision</h6>
                        <p className='text-grey'>To be the leading global advocate of freedom by accelerating a transition to a more open and fair world.</p>
                    </div>
                    <div className='bg-dark-color text-center py-10 px-5'>
                        <img src='./images/eye.png' alt='' className='w-12 m-auto'/>
                        <h6 className='text-center text-white text-[22px] py-4'>Our Mission</h6>
                        <p className='text-grey'>To be the leading global advocate of freedom by accelerating a transition to a more open and fair world.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
