import React from 'react'
import { Heading } from '../heading/Heading'

export const ChooseFuhnance = () => {
    const data = [
        {
            img: "./images/tick.png",
            title: "Ensure data investment",
            text: "Commission-free, online trading and no hidden fees. We’ll help you plan and invest for life after work."
        },
        {
            img: "./images/add-photo.png",
            title: "Innovative Tools",
            text: "Free, powerful trading platforms for every kind of investor"
        },
        {
            img: "./images/check.png",
            title: "$0 commissions",
            text: "Online US-listed stocks, ETFs, mutual funds, and options."
        },
        {
            img: "./images/share.png",
            title: "Core Portfolios",
            text: "Get a diversified portfolio that’s monitored and managed for a low annual advisory fee of 0.30% and $500 minimum."
        },
        {
            img: "./images/stock-rate.png",
            title: "Market insights",
            text: "Get timely market analysis, plus free Morgan Stanley equity research."
        },
        {
            img: "./images/headphone.png",
            title: "24/7 Support",
            text: "Diversified investment choices, all in one place. Award-winning, professional service when you need it most"
        }
        
    ]
    return (
        <>
            <section className='container mr-auto ml-auto mt-12 side-padding pb-20 md:pt-0 pt-7'>
                <Heading heading={<>Why choose <span className='text-blue'>Fuhnance</span></>} />
                <p className='text-white md:text-sm text-1x1 font-normal text-center md:pt-0 pt-2'>See why we're the trading partner of choice for hundreds of thousands of traders worldwide.</p>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-10'>
                    {
                        data.map((item, i) => {
                            return (
                                <div className='text-center bg-dark lg:px-8 px-5 py-6 rounded-md' key={i.toString()}>
                                    <img src={item.img} alt="" className='lg:w-[70px] md:w-[60px] w-[50px] m-auto' />
                                    <h6 className='text-white md:text-[20px] text-sm py-4'>{item.title}</h6>
                                    <p className='text-grey text-[14px]'>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

        </>
    )
}
