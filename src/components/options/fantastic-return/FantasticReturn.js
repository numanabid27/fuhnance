import React from 'react'
import { Heading } from '../../global/heading/Heading'
import { IoIosArrowForward } from 'react-icons/io';

export const FantasticReturn = () => {
    const data = [
        {
            img : "./images/stock-frame.png",
            title : "Heston Model",
            desc : "The Heston option pricing model, or Heston Model, is supposed to be an improvement to the Black-Scholes model which had taken some assumptions which did not reflect the real world."
        },
        {
            img : "./images/stock-frame.png",
            title : "Heston Model",
            desc : "The Heston option pricing model, or Heston Model, is supposed to be an improvement to the Black-Scholes model which had taken some assumptions which did not reflect the real world."
        },
        {
            img : "./images/stock-frame.png",
            title : "Heston Model",
            desc : "The Heston option pricing model, or Heston Model, is supposed to be an improvement to the Black-Scholes model which had taken some assumptions which did not reflect the real world."
        },
        {
            img : "./images/stock-frame.png",
            title : "Heston Model",
            desc : "The Heston option pricing model, or Heston Model, is supposed to be an improvement to the Black-Scholes model which had taken some assumptions which did not reflect the real world."
        },
        {
            img : "./images/stock-frame.png",
            title : "Heston Model",
            desc : "The Heston option pricing model, or Heston Model, is supposed to be an improvement to the Black-Scholes model which had taken some assumptions which did not reflect the real world."
        },
        {
            img : "./images/stock-frame.png",
            title : "Heston Model",
            desc : "The Heston option pricing model, or Heston Model, is supposed to be an improvement to the Black-Scholes model which had taken some assumptions which did not reflect the real world."
        }
    ]
  return (
    <>
        <section className='bg-dark-color py-20'>
            <div className='container m-auto'>
                <Heading heading = "Fantastic Return In Option Trading" />
                <p className='text-white text-center text-sm pt-2'>See why we're the trading partner of choice for hundreds of thousands of traders worldwide.</p>

                <div className='grid grid-cols-2 gap-8 mt-12'>
                    {
                        data.map(({img, title, desc}, i)=>{
                            return(
                                <div key={i.toString()} className='flex gap-6 '>
                                    <div>
                                        <img src={img} alt="" className='w-[133px]' />
                                    </div>
                                    <div>
                                        <h6 className='text-white font-semibold'>{title}</h6>
                                        <p className='text-grey py-3'>{desc}</p>
                                        <a href='#' className='text-blue flex items-center'>Learn more <span className='ml-2'><IoIosArrowForward/></span></a>
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
