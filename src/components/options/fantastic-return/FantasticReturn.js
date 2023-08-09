import React from 'react'
import { Heading } from '../../global/heading/Heading'
import { IoIosArrowForward } from 'react-icons/io';

export const FantasticReturn = () => {
    const data = [
        {
            img : "./images/stock-frame.png",
            title : "Heston Models",
            desc : "The Heston options pricing model, or Heston Model, is supposed to be an improvement to the Black-Scholes model which had taken some assumptions which did not reflect the real world."
        },
        {
            img : "./images/stock-frame.png",
            title : "Black Scholes Models",
            desc : "Trade on the strength of one currency versus another. The FX market is the largest and most liquid market in the world"
        },
        {
            img : "./images/stock-frame.png",
            title : "Exotic Options",
            desc : "Exotic Options Also known as Vanilla and untraditional trading in Python, and the pros & cons of Exotic Options trading."
        },
        {
            img : "./images/stock-frame.png",
            title : "Steady Options",
            desc : "Steady Options is an options trading advisory service that uses diversified options trading strategies for steady and consistent gains under all market conditions."
        },
        {
            img : "./images/stock-frame.png",
            title : "Swap Options",
            desc : "Swap Options or the term swaption provides you with the option to swap financial instruments and cash flows but usually the interest rate between two parties."
        },
        {
            img : "./images/stock-frame.png",
            title : "Leaps Options",
            desc : "LEAPS options are contracts with an expiry date longer than a year. The main benefit of a LEAPS option is that a long-term investor can dabble in options without worrying about the short-term volatility of the market."
        }
    ]
  return (
    <>
        <section className='bg-dark-color md:py-20 py-16'>
            <div className='container m-auto side-padding'>
                <Heading heading = "Fantastic Return In Option Trading" />
                <p className='text-white text-center md:text-sm text-1x1 md:pt-0 pt-2'>See why we're the trading partner of choice for hundreds of thousands of traders worldwide.</p>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 mt-12'>
                    {
                        data.map(({img, title, desc}, i)=>{
                            return(
                                <div key={i.toString()} className='md:flex text-center md:text-left gap-6 '>
                                    <div className='md:w-[9%] w-[20%] m-auto md:m-0'>
                                        <img src={img} alt="" className='lg:w-[133px] w-[193px]' />
                                    </div>
                                    <div className='md:w-[87%] w-[100%] mt-3 md:mt-0'>
                                        <h6 className='text-white font-semibold'>{title}</h6>
                                        <p className='text-grey py-3'>{desc}</p>
                                        <a href='#' className='text-blue flex items-center justify-center md:justify-start'>Learn more <span className='ml-2'><IoIosArrowForward/></span></a>
                                    </div>
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
