import React from 'react'
import { Heading } from '../../global/heading/Heading';
import { IoIosArrowForward } from 'react-icons/io';

export const FuhnanceProducts = () => {
    const data = [
        {
            heading: "Stocks",
            title: "Trade over 80 FX pairs, with a EUR/ USD spread as little as 0.2 and low commissions.",
            btn: "Start Trading"
        },
        {
            heading: "Forex",
            title: "Trade over 80 FX pairs, with a EUR/ USD spread as little as 0.2 and low commissions.",
            btn: "Start Trading"
        },
        {
            heading: "Options",
            title: "Trade over 80 FX pairs, with a EUR/ USD spread as little as 0.2 and low commissions.",
            btn: "Start Trading"
        },
    ]
    return (
        <>
            <section className='relative sec md:py-20 py-14'>
                <div className='container m-auto side-padding'>
                    <Heading heading="Fuhnance Products" />
                    <p className='text-white md:text-sm text-1x1 md:pt-0 pt-2 font-normal text-center capitalize'>Powerful platforms, tight spreads, fast execution, and dedicated support.</p>

                    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-1 mt-10 md:mt-0'>
                        {
                            data.map((item, i) => {
                                return (
                                    <div key={i.toString()} className='bg-dark text-center md:my-7 my-3 px-5 py-7 rounded'>
                                        <h6 className='text-blue font-semibold'>{item.heading}</h6>
                                        <p className='text-grey py-1 m-auto max-w-[317px]'>{item.title}</p>
                                        <a href='#' className='text-white pt-4 flex items-center justify-center'>{item.btn}
                                            <span className='ml-1'><IoIosArrowForward /></span></a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
