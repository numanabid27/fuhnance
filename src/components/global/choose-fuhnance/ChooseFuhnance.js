import React from 'react'
import { Heading } from '../heading/Heading'

export const ChooseFuhnance = () => {
    const data = [
        {
            img: "./images/tick.png",
            title: "Ensure data investent",
            text: "Commission-free, online trading and no hidden fees. We’ll help you plan and invest for life after work."
        },
        {
            img: "./images/tick.png",
            title: "Ensure data investent",
            text: "Commission-free, online trading and no hidden fees. We’ll help you plan and invest for life after work."
        },
        {
            img: "./images/tick.png",
            title: "Ensure data investent",
            text: "Commission-free, online trading and no hidden fees. We’ll help you plan and invest for life after work."
        },
        {
            img: "./images/tick.png",
            title: "Ensure data investent",
            text: "Commission-free, online trading and no hidden fees. We’ll help you plan and invest for life after work."
        },
        {
            img: "./images/tick.png",
            title: "Ensure data investent",
            text: "Commission-free, online trading and no hidden fees. We’ll help you plan and invest for life after work."
        },
        {
            img: "./images/tick.png",
            title: "Ensure data investent",
            text: "Commission-free, online trading and no hidden fees. We’ll help you plan and invest for life after work."
        }
    ]
    return (
        <>
            <section className='container m-auto'>
                <Heading heading={<>Why choose <span className='text-blue'>Fuhnance</span></>} />
                <p className='text-white text-sm font-normal text-center'>See why we're the trading partner of choice for hundreds of thousands of traders worldwide.</p>

                <div className='grid grid-cols-3 gap-4 mt-10'>
                    {
                        data.map((item, i) => {
                            return (
                                <div className='text-center bg-dark px-8 py-4 rounded-md' key={i.toString()}>
                                    <img src={item.img} alt="" className='w-[70px] m-auto' />
                                    <h6 className='text-white text-[20px] py-4'>{item.title}</h6>
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
