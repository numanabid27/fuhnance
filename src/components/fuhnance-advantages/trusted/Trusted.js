import React from 'react';
import { Heading } from "../../../components/global/heading/Heading";
import { Link } from 'react-router-dom';

export const Trusted = () => {
    return (
        <>
            <section className='py-20 bg-dark'>
                <div className='container m-auto side-padding'>
                    <Heading heading={<>Your <span className='text-blue'>trusted Fuhnance</span> exchange</>} />

                    <div className='grid grid-cols-2 gap-20 items-center pt-9'>
                        <div>
                            <img src="./images/trusted.png" alt='' />
                        </div>
                        <div>
                            <h2 className='text-xs text-white font-medium mb-4'>Your assets, Your choices, <span className='text-blue'>Our Technology</span></h2>
                            <p className='text-white'>We are building the Fuhnance – a more fair, accessible, efficient, and transparent financial system enabled for Forex, Stock and Options Trading.</p>
                            <p className='text-white'>We started in 2012 with the radical idea that anyone, anywhere, should be able to easily and securely trade. Today, we offer a trusted and easy-to-use platform for accessing the broader for trading in forex, stocks and options.</p>
                            <Link href="#" class="bg-blue text-white py-3 px-5 rounded inline-block mt-7">Get Started</Link>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}
